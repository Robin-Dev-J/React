import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './Login.css'

const Login = () => {
  return (
    <>
      <div className="wrapper">

        <div className="form">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" autoComplete="off" required />
            <FaUser />
          </div>
          <div className="input-box">
            <input type="password" autoComplete="off" placeholder="Password" required />
            <FaLock />
          </div>
          <br />
          <div className="remember-forgot">
            <div className="remember-me">
            
              <input
                  type="checkbox"
                  
                  name="lsRememberMe"
                  
                /><label>Remember me</label>
                <div className="forget">
                 <a href='#'>Forgot password?</a> </div>
            </div> 
            {}
          </div>
          <br></br>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href='Register.jsx'>Sign Up</a></p>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default Login;
