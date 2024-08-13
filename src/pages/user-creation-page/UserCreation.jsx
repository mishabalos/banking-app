import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import './UserCreation.css'; // Importing the CSS file

const UserCreation = () => {
  return (
    <div className="userCreation-container">
      <div className="sidenav-container">
        <SideNav />
      </div>

      <div className="create-content">
        <h1 className="createrHeader">Create Account</h1>
        
        <div className="create-box">
          <p className="createTitle">Create a new client account.</p>
          <form className="createForm">
            <label className="createLabels">FULL NAME</label>
            <input className="createInput" type="text" required></input>

            <label className="createLabels">ACCOUNT # (RANDOMLY GENERATED)</label>
            <input className="createInput" 
              type="text"
              // value={accountNumber}
              readOnly></input>

            <label className="createLabels">INITIAL BALANCE</label>
            <input className="createInput" type="number" placeholder="0.00"></input>

            <label className="createLabels">EMAIL ADDRESS</label>
            <input className="createInput" type="email" required></input>

            <label className="createLabels">PASSWORD</label>
            <input className="createInput" type="password" required></input>

            <button className="createButton" type="submit">CREATE ACCOUNT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreation;
