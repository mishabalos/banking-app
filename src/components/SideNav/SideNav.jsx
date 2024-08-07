// src/components/SideNav.js
import React from 'react';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className="sidenav">
      <a href="/">Home</a>
      <a href="/transaction">Transaction</a>
      <a href="/user-creation">User Creation</a>
    </div>
  );
};

export default SideNav;
