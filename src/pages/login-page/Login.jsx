import React from 'react';
import './Login.css'; 
import logo from "../../assets/images/avionbank-logo.png"
import { useNavigate } from 'react-router-dom'; 



const Login = () => {

    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
       //ERRORS OR AUTHENTICATIONS TO BE MADE
        navigate('/Home');
    };

    return (
    <div className="login-container">
        <div className="login-box">
            <img src={logo} alt="Avion Bank Logo" className="logo" />
            <h2 className="loginGreeting">Welcome Back!</h2>
            <h3 className="loginAction">Let's Sign You In.</h3>
            <form onSubmit={handleSubmit}>
                <input className='emailForm' type="email" placeholder="Email Address" required />
                <input className='passwordForm' type="password" placeholder="Password" required /> 
                <a href="/forget" className="forgot-password">Forgot Password?</a>
                
                <button type="submit">Sign In</button>
                
            </form>
        </div>
    </div>
    ); 
}

export default Login; 