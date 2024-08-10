import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import './UserCreation.css'

const UserCreation = () => {
  return (
    <div className="userCreation-container">
    <div className="sidenav-container">
      <SideNav />
    </div>

    <div className="page-content">
      User Works
    </div>
  </div>
  );
};

export default UserCreation;