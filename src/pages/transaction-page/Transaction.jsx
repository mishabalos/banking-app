import React, { useState } from 'react';
import SideNav from '../../components/SideNav/SideNav';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
// import './Transaction.css';

const Transaction = () => {
  const [alignment, setAlignment] = useState('web');

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
        <div className='transaction-header'>
          <h1>Transactions</h1>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="web">Web</ToggleButton>
            <ToggleButton value="android">Android</ToggleButton>
            <ToggleButton value="ios">iOS</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Transaction;