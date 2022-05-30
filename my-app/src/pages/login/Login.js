import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { AdminApis } from 'service/AdminApis'
import { basicSchema } from '../login/yupvalidation/basicSchema'
import { Link } from 'react-router-dom'
import image from 'assets/images/Id card Customizable Flat Illustrations _ Rafiki Style.png'

const Login = () => {
  const [user, setUserState] = useState({})
  const navigate = useNavigate()
  const inputChangeHandler = (e) => {
    const _user = { ...user, [e.target.name]: e.target.value }
    setUserState(_user)
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: basicSchema,

    onSubmit: async (user) => {
      try{
        localStorage.removeItem('token')
        let response = await AdminApis.login(user)
        localStorage.setItem('token', response.data.token)
        if(response.status ==200){
          navigate('/adminPanel')
        }
        
      } catch (error) {
        alert("رمز عبور یا نام کاربری نادرست است.")
      }
   
    },
  })

  return (
    <div className="form-body">
      <div className="formLogin">
        <div className="rightSide">
          <h3 className="h1Login">ورود به پنل مدیریت</h3>
          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <input
                placeholder="نام کاربری"
                id="username"
                name="username"
                type="text"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e)
                  inputChangeHandler(e)
                }}
                value={values.username}
                className={
                  errors.username && touched.username ? 'input-error' : ''
                }
              />
              {errors.username && touched.username && (
                <p className="error">{errors.username}</p>
              )}
              <input
                onBlur={handleBlur}
                placeholder="رمز عبور"
                id="password"
                name="password"
                type="password"
                onChange={(e) => {
                  handleChange(e)
                  inputChangeHandler(e)
                }}
                value={values.password}
                className={
                  errors.password && touched.password ? 'input-error' : ''
                }
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
              <button className="button" type="submit">
                ورود
              </button>
            </form>
          </div>
        <Link className="link-form" to={'/'}>
          بازگشت به صفحه اصلی
        </Link>
        </div>
        <div className='leftSide'>
        <img src={image} className="imgLogin" />
        </div>
      </div>
    </div>
  )
}
export default Login
