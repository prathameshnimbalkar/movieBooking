import React, { useState,} from 'react';
import { useNavigate } from "react-router-dom";
import './login.css'; 
import email_icon from '../img/email_icon.png'
import eye_hidden_icon from '../img/eye_hidden_icon1.png'
import eye_view_icon from '../img/eye_view_icon1.png'
import password_icon from '../img/password_icon.png'



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

 

  

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 8 || password.length > 20) {
      setPasswordError('Password length must be between 8 and 20 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (emailError || passwordError) {
        return;
    }
    try {
const response = await fetch('http://localhost:8000/base/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user)); // Save user details in localStorage
            navigate('/');
        } else {
            const data = await response.json();
            console.error('Login failed:', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="main-container">
      <form class="form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              required
            />
            <div className="error">{emailError}</div>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              required
            />
            <img src={passwordVisible ? eye_hidden_icon : eye_view_icon} 
            className="inputEyeIcon" onClick={togglePasswordVisibility} 
            alt="Toggle Password Visibility" />
            <div className="error">{passwordError}</div>
          </div>
        </div>
        <div className="create-forgot">
          <div className="forgot-password">
          <a href="forgotpassword">Forgot Password?</a>
          </div>
        </div>
        <center>
        <div className="submit-container">
          <button type="submit" onclick={Login}>Login</button>
          

      <p class="signup-link" >
        No account?
        <a href="signup">Sign up</a>
      </p>
        </div>
        </center>
      </form>
    </div>
  );
};

export default Login;