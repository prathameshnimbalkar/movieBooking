import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css'; 
import email_icon from '../img/email_icon.png';
import eye_hidden_icon from '../img/eye_hidden_icon1.png';
import eye_view_icon from '../img/eye_view_icon1.png';
import password_icon from '../img/password_icon.png';
import phone_icon from '../img/phone_icon.png';
import user_icon from '../img/user_icon.png';
import home_address from '../img/home-address.png'
 
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');
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
      setPasswordError('Password must be between 8 and 20 characters');
    } else {
      setPasswordError('');
    }
  };
 
  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };
 
  const validatePhone = () => {
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }
  };
 
  /*const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validatePhone();
 
    if (!emailError && !passwordError && !confirmPasswordError && !phoneError) {
      console.log('Form submitted successfully');
    }
  };*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validatePhone();
    if (!emailError && !passwordError && !confirmPasswordError && !phoneError) {
      console.log('User created successfully');
                navigate('/login');
        try {
const response = await fetch('http://localhost:8000/base/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, phone, address }),
            });
            if (response.ok) {
                console.log('User created successfully');
                navigate('/login'); // Redirect to home page
            } else {
                const data = await response.json();
                console.error('Error:', data);
                // Handle error - show error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network error
        }
    }
  };
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 
  return (
    <div className="main-container">
      <form class="form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" id="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <div className="error">{nameError}</div>
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} required />
            <div className="error">{emailError}</div>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type={passwordVisible ? 'text' : 'password'} id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} required />
            <img src={passwordVisible ? eye_hidden_icon : eye_view_icon} className="inputEyeIcon" onClick={togglePasswordVisibility} alt="Toggle Password Visibility" />
            <div className="error">{passwordError}</div>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type={passwordVisible ? 'text' : 'password'} id="confirm-password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={validateConfirmPassword} required />
            <img src={passwordVisible ? eye_hidden_icon : eye_view_icon} className="inputEyeIcon" onClick={togglePasswordVisibility} alt="Toggle Password Visibility" />
            <div className="error">{confirmPasswordError}</div>
          </div>
          <div className="input">
            <img src={phone_icon} alt="" />
            <input type="text" id="phone" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={validatePhone} required />
            <div className="error">{phoneError}</div>
          </div>
          <div className="input">
            <img src={home_address} alt="" />
            <input type="text" id="address" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <div className="error">{addressError}</div>
          </div>
        </div>
        <div className="login-account">Already have an account? <a href="Login">Login</a>
      </div>
      <center>
        <div className="submit-container">
          <button type="submit">Sign Up</button>
        </div>
        </center>
      </form>
    </div>
  );
};
 
export default SignUp;