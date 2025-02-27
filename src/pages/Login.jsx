import React from 'react'
import './Login.css'

function Login() {
  return (
    <div class="login-container">
        <div class="login-header">
            <h1>Welcome To Study Buddy !</h1>
            <p>Please enter your credentials to login</p>
        </div>
        
        <form class="login-form">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required/>
            </div>
            
            <div class="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
            
            <button type="submit" class="login-button">Log In</button>
        </form>
        
        <div class="login-footer">
            <p>Don't have an account?<a href="#">Sign Up</a></p>
        </div>
    </div>
  )
}

export default Login