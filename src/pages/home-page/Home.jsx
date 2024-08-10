import React from 'react';
import bankUsers from '../../assets/data/bankUsers.json';
import SideNav from '../../components/SideNav/SideNav';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="sidenav-container">
        <SideNav />
      </div>
      <div className="page-content">
        <h1>Accounts</h1>
        {bankUsers.map((account, index) => (
          <div className="bankUsers-box" key={index}>
            <h2>Account Number: {account.accountNumber}</h2>
            <p>{account.accountName}</p>
            <p>{account.email}</p>
            <p className="totalBalance">Total Balance: {account.totalBalance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;