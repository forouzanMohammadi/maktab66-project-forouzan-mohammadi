import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminApis } from 'service/AdminApis';

function Login() {
  const [user,setUserState] =   useState({});
  const navigate = useNavigate();
  const inputChangeHandler=(e)=>{
    const _user={...user,[e.target.name]: e.target.value}
    setUserState(_user);
}

  const handleSubmit =async (e) => {
    e.preventDefault()
    localStorage.removeItem('token');
    let response =await AdminApis.login(user);
    localStorage.setItem('token', response.data.token);
    console.log(response.data.token);
    navigate('/adminPanel');
  }

  return (
    <div className="body_form">
      <div className="pagewrap">
        <form className="form" onSubmit={handleSubmit} id="form">
          <h3 className="form__title">خوش آمدید</h3>
          <div className="container">
            <input
            onChange={inputChangeHandler}
              className="container__input"
              type="text"
              id="username"
              name="username"
              required
            />
            <label id="userLabel" for="username" className="container__label">
              Username
            </label>
          </div>
          <div className="container">
            <input
            onChange={inputChangeHandler}
              className="container__input"
              type="password"
              id="pass"
              name="password"
              required
            />
            <label id="passLabel" for="pass" className="container__label">
              Password
            </label>
          </div>
          <button
            className="form__submit"
            id="submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login;
