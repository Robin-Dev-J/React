import React from 'react';
// import './LoginForm.css'; 
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <FaUser />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock />
        </div>
        <div className='remember-forgot'>
          <label>Remember Me<input type='checkbox'/></label>
          {/* <a href='#'>Forgot password?</a> */}
        </div>
        <button type='submit'>Login</button>
        <div className='register-link'>
          <p>Don't have an account? </p>
          {/* <a href='Register.jsx'>Register</a> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
