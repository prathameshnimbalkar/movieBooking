import React, { useState } from 'react';
import './login.css'; 
import email_icon from '../img/email_icon.png';
import password_icon from '../img/password_icon.png';
import eye_view_icon from '../img/eye_view_icon.png';
import eye_hide_icon from '../img/eye_hidden_icon.png';
 
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
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
    if (newPassword.length < 8 || newPassword.length > 20) {
      setPasswordError('Password length must be between 8 and 20 characters');
    } else {
      setPasswordError('');
    }
  };
 
  const validateConfirmPassword = () => {
    if (confirmPassword !== newPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
 
  };

  /*if(!emailError && !passwordError && !confirmPassword)
  {
    window.location.href='Login';
  }*/
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 
  return (
    <div className="main-container">
      <form class="form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">Reset Password</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              id="email"
              placeholder="Enter Registered Email"
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
              id="newpassword"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onBlur={validatePassword}
              required
            />
            <img
              src={passwordVisible ? eye_hide_icon : eye_view_icon}
              className="inputEyeIcon"
              alt="Toggle Password Visibility"
              onClick={togglePasswordVisibility}
            />
            <div className="error">{passwordError}</div>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="confirmpassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateConfirmPassword}
              required
            />
            <img
              src={passwordVisible ? eye_hide_icon : eye_view_icon}
              className="inputEyeIcon"
              alt="Toggle Password Visibility"
              onClick={togglePasswordVisibility}
            />
            <div className="error">{confirmPasswordError}</div>
          </div>
        </div>
        <center>
        <div className="submit-container">
          <button type="submit" id="resetPasswordBtn" >
            Reset Password
          </button>
        </div>
        <div className="previous-page">
          <a href="Login">Previous Page</a>
        </div>
        </center>
      </form>
    </div>
  );
};
 
export default ForgotPassword;