import React from 'react';
import './Login.css'; 

const Login = () => {
    return (
    <div className="login-container">
        <div className="login-box">
            <img src="/assets/images/avionbank-logo.png" alt="Avion Bank Logo" className="logo" />
            <h2>Welcome Back!</h2>
            <h3>Let's Sign You In.</h3>
            <form>
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required /> 
                <a href="/forget" className="forgot-password">Forgot Password?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
    ); 
}

export default Login; 