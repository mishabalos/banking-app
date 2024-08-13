// src/components/SideNav.js
import React from 'react';
import './SideNav.css';
import logo from "../../assets/images/avionbank-logo-3.png"

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className='sidenav-menu'>
      <div className="sidenav-logo">
      <img src={logo} alt="Avion Bank Logo" />
        </div>
      <ul>
        <li><a href="/home">Accounts</a></li>
        <li><a href="/transaction">Transactions</a></li>
        <li><a href="/usercreation">Create Account</a></li>
      </ul>   
      </div>
      <div className='sidenav-account'>
      <p>Julio Tan</p>
      </div>
    </div>
  );
};

export default SideNav;
