import React, { useState } from 'react';
import SideNav from '../../components/SideNav/SideNav';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import './Transaction.css';

const Transaction = () => {
  const [alignment, setAlignment] = useState('deposit');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };


  return (
    <div className="transaction-container">
      <div className="sidenav-container">
        <SideNav />
      </div>

      <div className="transaction-page-content">
        <div className="transaction-header">
          <h1>Transactions</h1>
        </div>
        <div className="transaction-buttons">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Transaction Type"
          >
            <ToggleButton value="deposit">Deposit</ToggleButton>
            <ToggleButton value="withdraw">Withdraw</ToggleButton>
            <ToggleButton value="transfer">Transfer</ToggleButton>
          </ToggleButtonGroup>
        </div>

        {alignment === 'deposit' && (
          <div className="transaction-form-container deposit">
            <h1>Deposit</h1>
            <div className='transaction-form'>

              <form className='transaction'>
                <div className='account-form'>
                  <label htmlFor="balance" className="account-label">Account</label>
                  <input className="account" type="balance" placeholder="Select Account" required />
                </div>

                <div className='balance-form'>
                  <label htmlFor="balance" className="balance-label">Balance</label>
                  <input className="transaction-balance" type="balance" placeholder="0" required />
                </div>

                <div className='deposit-form'>
                  <label htmlFor="deposit" className="deposit-label">Amount to Deposit</label>
                  <input className="deposit-input" type="balance" placeholder="₱00.00" required />
                </div>

                <button type="submit" className="transaction-submit">Deposit</button>
              </form>
            </div>

          </div>
        )}

        {alignment === 'withdraw' && (
          <div className="transaction-form-container withdraw">
            <h1>Withdraw</h1>
            <div className='transaction-form'>

              <form className='transaction'>
                <div className='account-form'>
                  <label htmlFor="balance" className="account-label">Account</label>
                  <input className="account" type="balance" placeholder="Select Account" required />
                </div>

                <div className='balance-form'>
                  <label htmlFor="balance" className="balance-label">Balance</label>
                  <input className="transaction-balance" type="balance" placeholder="0" required />
                </div>

                <div className='deposit-form'>
                  <label htmlFor="deposit" className="deposit-label">Amount to Deposit</label>
                  <input className="deposit-input" type="balance" placeholder="₱00.00" required />
                </div>

                <button type="submit" className="transaction-submit">Withdraw</button>
              </form>
            </div>

          </div>
        )}

        {alignment === 'transfer' && (
          <div className="transaction-form-container withdraw">
            <h1>Transfer</h1>
            <div className='transaction-form'>

              <form className='transaction'>
                <h4>Transfer From:</h4>
                <div className='account-form'>
                  <label htmlFor="balance" className="account-label">Account</label>
                  <input className="account" type="balance" placeholder="Select Account" required />
                </div>

                <div className='balance-form'>
                  <label htmlFor="balance" className="balance-label">Balance</label>
                  <input className="transaction-balance" type="balance" placeholder="0" required />
                </div>
                
                <h4>Transfer To:</h4>
                <div className='transfer-account-form'>
                  <label htmlFor="transferAccount" className="transfer_account-label">Account</label>
                  <input className="transfer-account" type="balance" placeholder="Select Account" required />
                </div>

                <div className='deposit-form'>
                  <label htmlFor="deposit" className="deposit-label">Amount to Deposit</label>
                  <input className="deposit-input" type="balance" placeholder="₱00.00" required />
                </div>

                <button type="submit" className="transaction-submit">Withdraw</button>
              </form>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Transaction;