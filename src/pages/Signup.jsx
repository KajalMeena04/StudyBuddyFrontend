import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <div class="signup-container">
        <div class="signup-header">
            <h1>Create Account</h1>
            <p>Please fill in the details to get started</p>
        </div>
        
        <form class="signup-form">
            <div class="name-fields">
                <div class="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" placeholder="First name" required/>
                </div>
                
                <div class="form-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" placeholder="Last name" required/>
                </div>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Create a password" required/>
            </div>
            
            <div class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm your password" required/>
            </div>
            
            <div class="terms">
                <input type="checkbox" id="terms" required/>
                <label for="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>
            
            <button type="submit" class="signup-button">Create Account</button>
        </form>
        
        <div class="signup-footer">
            <p>Already have an account?<a href="#">Log In</a></p>
        </div>
    </div>
  )
}

export default Signup