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
  const [selectedFromAccount, setSelectedFromAccount] = useState('');
  const [selectedToAccount, setSelectedToAccount] = useState('');
  const [fromAccountBalance, setFromAccountBalance] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
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

  const handleFromAccountSelectionChange = event => {
    const accountIndex = userAccounts.findIndex(account => account.accountName === event.target.value);
    if (accountIndex !== -1) {
      const selectedAccount = userAccounts[accountIndex];
      setSelectedFromAccount(selectedAccount.accountName);
      const formattedBalance = selectedAccount.totalBalance.replace(/,/g, '');
      setFromAccountBalance(formattedBalance);
    } else {
      setSelectedFromAccount('');
      setFromAccountBalance('');
    }
  };

  const handleToAccountSelectionChange = event => {
    setSelectedToAccount(event.target.value);
  };

  // Deposit functionality
  const handleSubmitDeposit = (event) => {
    event.preventDefault();
    if (!depositAmount || !selectedFromAccount) {
      return;
    }

    const newBalance = parseFloat(fromAccountBalance) + parseFloat(depositAmount);
    setFromAccountBalance(newBalance.toString());
    setIsModalOpen(true);

    const updatedUserAccounts = userAccounts.map(account => {
      if (account.accountName === selectedFromAccount) {
        const formattedNewBalance = newBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return { ...account, totalBalance: formattedNewBalance };
      }
      return account;
    });
    localStorage.setItem('users', JSON.stringify(updatedUserAccounts));
  };

  // Withdraw functionality
  const handleSubmitWithdraw = (event) => {
    event.preventDefault();
    if (!withdrawAmount || !selectedFromAccount) {
      return;
    }

    if (parseFloat(withdrawAmount) > parseFloat(fromAccountBalance)) {
      alert('Insufficient funds');
      return;
    }

    const newBalance = parseFloat(fromAccountBalance) - parseFloat(withdrawAmount);
    setFromAccountBalance(newBalance.toString());
    setIsModalOpen(true);

    const updatedUserAccounts = userAccounts.map(account => {
      if (account.accountName === selectedFromAccount) {
        const formattedNewBalance = newBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return { ...account, totalBalance: formattedNewBalance };
      }
      return account;
    });
    localStorage.setItem('users', JSON.stringify(updatedUserAccounts));
  };

  // Transfer functionality
  const handleSubmitTransfer = (event) => {
    event.preventDefault();
    if (!transferAmount || !selectedFromAccount || !selectedToAccount) {
      return;
    }

    if (selectedFromAccount === selectedToAccount) {
      alert('Cannot transfer to the same account.');
      return;
    }

    const fromAccountIndex = userAccounts.findIndex(account => account.accountName === selectedFromAccount);
    const toAccountIndex = userAccounts.findIndex(account => account.accountName === selectedToAccount);

    if (parseFloat(transferAmount) > parseFloat(fromAccountBalance)) {
      alert('Insufficient funds in the selected account.');
      return;
    }

    const newFromAccountBalance = parseFloat(fromAccountBalance) - parseFloat(transferAmount);
    const toAccountBalance = parseFloat(userAccounts[toAccountIndex].totalBalance.replace(/,/g, ''));
    const newToAccountBalance = toAccountBalance + parseFloat(transferAmount);

    const updatedUserAccounts = userAccounts.map((account, index) => {
      if (index === fromAccountIndex) {
        const formattedNewFromBalance = newFromAccountBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return { ...account, totalBalance: formattedNewFromBalance };
      }
      if (index === toAccountIndex) {
        const formattedNewToBalance = newToAccountBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return { ...account, totalBalance: formattedNewToBalance };
      }
      return account;
    });

    localStorage.setItem('users', JSON.stringify(updatedUserAccounts));
    setIsModalOpen(true);
    setUserAccounts(updatedUserAccounts);
    setFromAccountBalance(newFromAccountBalance.toString());
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
                  <select className="account" onChange={handleFromAccountSelectionChange} value={selectedFromAccount}>
                    <option value="">Select Account</option>
                    {userAccounts.map((account, index) => (
                      <option key={index} value={account.accountName}>{account.accountName}</option>
                    ))}
                  </select>
                </div>

                <div className='balance-form'>
                  <label htmlFor="balance" className="balance-label">Current Balance</label>
                  <input className="transaction-balance" type="text" value={`₱${fromAccountBalance}`} readOnly />
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
                <select className="account" onChange={handleFromAccountSelectionChange} value={selectedFromAccount}>
                  <option value="">Select Account</option>
                  {userAccounts.map((account, index) => (
                    <option key={index} value={account.accountName}>{account.accountName}</option>
                  ))}
                </select>
              </div>

              <div className='balance-form'>
                <label htmlFor="balance" className="balance-label">Current Balance</label>
                <input id="balance" className="transaction-balance" type="text" value={`₱${fromAccountBalance}`} readOnly />
              </div>

              <div className='withdraw-form'>
                <label htmlFor="withdraw" className="withdraw-label">Amount to Withdraw</label>
                <input id="withdraw" className="withdraw-input" type="number" placeholder="₱00.00" onChange={(e) => setWithdrawAmount(parseFloat(e.target.value))} required />
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
            <form className='transaction' onSubmit={handleSubmitTransfer}>
              <h4>Transfer From:</h4>
              <div className='account-form'>
                <label htmlFor="fromAccount" className="account-label">Account</label>
                <select className="account-select" id="fromAccount" onChange={handleFromAccountSelectionChange} value={selectedFromAccount}>
                  <option value="">Select Account</option>
                  {userAccounts.map((account, index) => (
                    <option key={index} value={account.accountName}>{account.accountName}</option>
                  ))}
                </select>
              </div>

              <div className='balance-form'>
                <label htmlFor="balance" className="balance-label">Current Balance</label>
                <input id="balance" className="transaction-balance" type="text" value={`₱${fromAccountBalance}`} readOnly />
              </div>

              <h4>Transfer To:</h4>
              <div className='transfer-account-form'>
                <label htmlFor="toAccount" className="transfer_account-label">Account</label>
                <select className="transfer-account-select" id="toAccount" onChange={handleToAccountSelectionChange} value={selectedToAccount}>
                  <option value="">Select Account</option>
                  {userAccounts.map((account, index) => (
                    <option key={index} value={account.accountName}>{account.accountName}</option>
                  ))}
                </select>
              </div>

              <div className='transfer-form'>
                <label htmlFor="transferAmount" className="transfer-label">Amount to Transfer</label>
                <input id="transferAmount" className="transfer-input" type="number" placeholder="₱00.00" required onChange={(e) => setTransferAmount(parseFloat(e.target.value))} />
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
            <h2 id="modal-modal-title">
              {transactionType === 'deposit' ? 'Deposit Successful!' : transactionType === 'withdraw' ? 'Withdrawal Successful!' : 'Transfer Successful!'}
            </h2>
            <p id="modal-modal-description">New balance in {selectedFromAccount} is ₱{fromAccountBalance}</p>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Transaction;
