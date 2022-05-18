import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { AdminApis } from 'service/AdminApis'


const Login = () => {
  const [user, setUserState] = useState({})
  const navigate = useNavigate()
  const inputChangeHandler = (e) => {
    const _user = { ...user, [e.target.name]: e.target.value }
    setUserState(_user)
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      localStorage.removeItem('token')
      let response = await AdminApis.login(user)
      localStorage.setItem('token', response.data.token)
      console.log(response.data.token)
      navigate('/')
    },
  })
  return (
    <div className="form-body">
      <div className="container">
      <h1>خوش آمدید</h1>
        <form className="form" onSubmit={formik.handleSubmit}>
          {/* <label htmlFor="username">نام کاربری</label> */}
          <input
            placeholder='نام کاربری'
            id="username"
            name="username"
            type="text"
            onChange={(e) => {
              formik.handleChange(e)
              inputChangeHandler(e)
            }}
            value={formik.values.username}
          />
          {/* <label htmlFor="password">رمز عبور</label> */}
          <input
            placeholder='رمز عبور'
            id="password"
            name="password"
            type="password"
            onChange={(e) => {
              formik.handleChange(e)
              inputChangeHandler(e)
            }}
            value={formik.values.password}
          />
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  )
}
export default Login
