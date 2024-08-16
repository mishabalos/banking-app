import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/images/avionbank-logo.png";
import { useNavigate } from "react-router-dom";
import accounts from "../../assets/data/bankUserAccounts.json";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //ERRORS OR AUTHENTICATIONS TO BE MADE
    const email = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    const user = accounts.find(
      (account) => account.email === email && account.password === password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate("/Home");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Avion Bank Logo" className="logo" />
        <h2 className="loginGreeting">Welcome Back!</h2>
        <h3 className="loginAction">Let's Sign You In.</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="emailForm"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="passwordForm"
            type="password"
            placeholder="Password"
            required
          />
          <a href="/forget" className="forgot-password">
            Forgot Password?
          </a>

          <button type="submit">Sign In</button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
