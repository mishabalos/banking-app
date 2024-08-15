import React, { useState, useEffect } from 'react';
import SideNav from '../../components/SideNav/SideNav';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './Transaction.css';

const Transaction = () => {
  const [transactionType, setTransactionType] = useState('deposit');
  const [userAccounts, setUserAccounts] = useState([]);
  const [selectedAccountName, setSelectedAccountName] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadedUserAccounts = localStorage.getItem('users');
    if (loadedUserAccounts) {
      setUserAccounts(JSON.parse(loadedUserAccounts));
    }
  }, []);

  const handleTransactionTypeChange = (event, newTransactionType) => {
    if (newTransactionType !== null) {
      setTransactionType(newTransactionType);
    }
  };

  const handleAccountSelectionChange = event => {
    const accountIndex = userAccounts.findIndex(account => account.accountName === event.target.value);
    if (accountIndex !== -1) {
      const selectedAccount = userAccounts[accountIndex];
      setSelectedAccountName(selectedAccount.accountName);
      const formattedBalance = selectedAccount.totalBalance.replace(/,/g, '');
      setAccountBalance(formattedBalance);
    } else {
      setSelectedAccountName('');
      setAccountBalance('');
    }
  };

  const handleSubmitDeposit = (event) => {
    event.preventDefault();
    if (!depositAmount || !selectedAccountName) {
      return;
    }

    const newBalance = parseFloat(accountBalance) + parseFloat(depositAmount);
    setAccountBalance(newBalance.toString());
    setIsModalOpen(true);

    const updatedUserAccounts = userAccounts.map(account => {
      if (account.accountName === selectedAccountName) {
        const formattedNewBalance = newBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return { ...account, totalBalance: formattedNewBalance };
      }
      return account;
    });
    localStorage.setItem('users', JSON.stringify(updatedUserAccounts));
  };

  const handleSubmitWithdraw = (event) => {
    event.preventDefault();
    if (!withdrawAmount || !selectedAccountName) {
      return;
    }

    if (parseFloat(withdrawAmount) > parseFloat(accountBalance)) {
      alert('Insufficient funds');
      return;
    }

    const newBalance = parseFloat(accountBalance) - parseFloat(withdrawAmount);
    setAccountBalance(newBalance.toString());
    setIsModalOpen(true);

    const updatedUserAccounts = userAccounts.map(account => {
      if (account.accountName === selectedAccountName) {
        const formattedNewBalance = newBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return { ...account, totalBalance: formattedNewBalance };
      }
      return account;
    });
    localStorage.setItem('users', JSON.stringify(updatedUserAccounts));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            value={transactionType}
            exclusive
            onChange={handleTransactionTypeChange}
            aria-label="Transaction Type"
          >
            <ToggleButton value="deposit">Deposit</ToggleButton>
            <ToggleButton value="withdraw">Withdraw</ToggleButton>
            <ToggleButton value="transfer">Transfer</ToggleButton>
          </ToggleButtonGroup>
        </div>

        {transactionType === 'deposit' && (
          <div className="transaction-form-container deposit">
            <h1>Deposit</h1>
            <div className='transaction-form'>
              <form className='transaction' onSubmit={handleSubmitDeposit}>
                <div className='account-form'>
                  <label htmlFor="account" className="account-label">Account</label>
                  <select className="account" onChange={handleAccountSelectionChange} value={selectedAccountName}>
                    <option value="">Select Account</option>
                    {userAccounts.map((account, index) => (
                      <option key={index} value={account.accountName}>{account.accountName}</option>
                    ))}
                  </select>
                </div>

                <div className='balance-form'>
                  <label htmlFor="balance" className="balance-label">Current Balance</label>
                  <input className="transaction-balance" type="text" value={`₱${accountBalance}`} readOnly />
                </div>

                <div className='deposit-form'>
                  <label htmlFor="deposit" className="deposit-label">Amount to Deposit</label>
                  <input className="deposit-input" type="number" placeholder="₱00.00" onChange={(e) => setDepositAmount(parseFloat(e.target.value))} required />
                </div>

                <button type="submit" className="transaction-submit">Deposit</button>
              </form>
            </div>
          </div>
        )}

        {transactionType === 'withdraw' && (
          <div className="transaction-form-container withdraw">
            <h1>Withdraw</h1>
            <div className='transaction-form'>

              <form className='transaction' onSubmit={handleSubmitWithdraw}>
                <div className='account-form'>
                  <label htmlFor="account" className="account-label">Account</label>
                  <select className="account-select" id="account" onChange={handleAccountSelectionChange} value={selectedAccountName}>
                    <option value="">Select Account</option>
                    {userAccounts.map((account, index) => (
                      <option key={index} value={account.accountName}>{account.accountName}</option>
                    ))}
                  </select>
                </div>

                <div className='balance-form'>
                  <label htmlFor="balance" className="balance-label">Current Balance</label>
                  <input id="balance" className="transaction-balance" type="text" value={`₱${accountBalance}`} readOnly />
                </div>

                <div className='withdraw-form'>
                  <label htmlFor="withdraw" className="withdraw-label">Amount to Withdraw</label>
                  <input id="withdraw" className="withdraw-input" type="number" placeholder="₱00.00" required onChange={(e) => setWithdrawAmount(parseFloat(e.target.value))} />
                </div>

                <button type="submit" className="transaction-submit">Withdraw</button>
              </form>
              </div>
          </div>
        )}

        {transactionType === 'transfer' && (
          <div className="transaction-form-container transfer">
            <h1>Transfer</h1>
            <div className='transaction-form'>
              <form className='transaction'>
                <h4>Transfer From:</h4>
                <div className='account-form'>
                  <label htmlFor="fromAccount" className="account-label">Account</label>
                  <select className="account-select" id="fromAccount" onChange={handleAccountSelectionChange} value={selectedAccountName}>
                    <option value="">Select Account</option>
                    {userAccounts.map((account, index) => (
                      <option key={index} value={account.accountName}>{account.accountName}</option>
                    ))}
                  </select>
                </div>

                <div className='balance-form'>
                  <label htmlFor="balance" className="balance-label">Current Balance</label>
                  <input id="balance" className="transaction-balance" type="text" value={`₱${accountBalance}`} readOnly />
                </div>

                <h4>Transfer To:</h4>
                <div className='transfer-account-form'>
                  <label htmlFor="toAccount" className="transfer_account-label">Account</label>
                  <select className="transfer-account-select" id="toAccount">
                    <option value="">Select Account</option>
                    {userAccounts.map((account, index) => (
                      <option key={index} value={account.accountName}>{account.accountName}</option>
                    ))}
                  </select>
                </div>

                <div className='transfer-form'>
                  <label htmlFor="transferAmount" className="transfer-label">Amount to Transfer</label>
                  <input id="transferAmount" className="transfer-input" type="number" placeholder="₱00.00" required />
                </div>

                <button type="submit" className="transaction-submit">Submit Transfer</button>
              </form>
            </div>
          </div>
        )}

        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="deposit-modal">
            <h2 id="modal-modal-title">{transactionType === 'deposit' ? 'Deposit Successful!' : 'Withdrawal Successful!'}</h2>
            <p id="modal-modal-description">New balance is: ₱{accountBalance}</p>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Transaction;

