import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AdminApis } from 'service/AdminApis';
import {basicSchema} from '../login/yupvalidation/basicSchema'
import {Link} from 'react-router-dom'



const Login = () => {
  const [user, setUserState] = useState({});
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    const _user = { ...user, [e.target.name]: e.target.value }
    setUserState(_user)
  };



  const {values, errors,touched ,handleChange, handleSubmit,handleBlur} = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: basicSchema,
    
    onSubmit: async (values) => {
      localStorage.removeItem('token')
      let response = await AdminApis.login(user)
      localStorage.setItem('token', response.data.token)
      console.log(response.data.token)
      navigate('/adminPanel')
    },
    
  });

  return (
    <div className="form-body">
      <div className="container">
      <h1>ورود به پنل مدیریت</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder='نام کاربری'
            id="username"
            name="username"
            type="text"
            onBlur={handleBlur}
            onChange={(e) => {
              handleChange(e)
              inputChangeHandler(e)
            }}
            value={values.username}
            className={errors.username && touched.username ? "input-error" : ""}
          />
          {errors.username && touched.username && <p className='error'>{errors.username}</p>}
          <input
            onBlur={handleBlur}
            placeholder='رمز عبور'
            id="password"
            name="password"
            type="password"
            onChange={(e) => {
              handleChange(e)
              inputChangeHandler(e)
            }}
            value={values.password}
            className={errors.password && touched.password ? "input-error" : ""}
          />
           {errors.password && touched.password && <p className='error'>{errors.password}</p>}
          <button className='button' type="submit">ورود</button>
        </form>
        <Link className='link-form' to={'/'}>صفحه اصلی</Link>
      </div>
    </div>
  )
}
export default Login
