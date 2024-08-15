import React, { useState } from 'react';
import SideNav from '../../components/SideNav/SideNav';
import './Home.css';

const Home = () => {
   // eto yung pang retrieve mo ng data from localStorage
  const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem('users')) || []);

  // Function to handle account deletion
  const handleDeleteAccount = (accountName) => {
    const updatedAccounts = accounts.filter(account => account.accountName !== accountName);
    setAccounts(updatedAccounts);
    localStorage.setItem('users', JSON.stringify(updatedAccounts));
  };

  return (
    <div className="home-container">
      <div className="sidenav-container">
        <SideNav />
      </div>
      <div className="page-content">
        <h1 className="homeHeader">Accounts</h1>
        {accounts.map((account, index) => (
          <div className="bankUsers-box" key={index}>
            <h2 className="accountName">{account.accountName}</h2>
            <div className="accountDetails">
              <h3 className="accounth3">{account.accountNumber}</h3>
              <h3 className="accounth3">{account.email}</h3>
            </div>
            <div className="accountTotalBalance">
              <p className="accountTotalHeader">TOTAL BALANCE:</p>
              <p className="accountDisplayBalance">₱{account.totalBalance}</p>
            </div>
            <button 
              className="deleteAccountButton" 
              onClick={() => handleDeleteAccount(account.accountName)}
            >
              Delete Account
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
