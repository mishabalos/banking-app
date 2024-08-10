import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import './Transaction.css'; // Importing the CSS file

const Transaction = () => {
  return (
    <div className="transaction-container">
      <div className="sidenav-container">
        <SideNav />
      </div>

      <div className="page-content">
        hello
      </div>
    </div>
  );
};

export default Transaction;
