import React from 'react';
import './Home.css'; 
import bankUsers from '../../assets/data/bankUsers.json';
// import { useNavigate } from 'react-router-dom'; 


const Home = () => {
  return (
    <div className="home-container">
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
    ); 
};

export default Home;