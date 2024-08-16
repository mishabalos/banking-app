import React, { useState } from 'react';
import SideNav from '../../components/SideNav/SideNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './Home.css';

const Home = () => {
  // if user logs in, only their account details should be displayed 
  // 1. Retrieve user data
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  // 2. Show relevant data
  let accountDefault = []
  if(currentUser.accountType === 'client') {
    accountDefault = [currentUser];
  } else {
    accountDefault = JSON.parse(localStorage.getItem('users'))
  }
  // eto yung pang retrieve mo ng data from localStorage
  const [accounts, setAccounts] = useState(accountDefault || []);


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
          <div className='accounts-container'>
            <div className="bankUsers-box" key={index}>
              <div className='account-header'>
                <h2 className="accountName">{account.accountName}</h2>
                <div
                  className="deleteAccountButton"
                  onClick={() => handleDeleteAccount(account.accountName)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
              <div className="accountDetails">
                <h3 className="account-number">{account.accountNumber}</h3>
                <h3 className="account-email">{account.email}</h3>
              </div>
              <div className="accountTotalBalance">
                <p className="accountTotalHeader">TOTAL BALANCE:</p>
                <p className="accountDisplayBalance">₱{account.totalBalance}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Home;
