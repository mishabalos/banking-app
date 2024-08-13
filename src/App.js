import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/login-page/Login';
import Home from './pages/home-page/Home';
import Transaction from './pages/transaction-page/Transaction';
import UserCreation from './pages/user-creation-page/UserCreation';
import './App.css';
import accountData from '../src/assets/data/bankUserAccounts.json'

function App() {
  // check natin yung localStorage kung meron nang laman na array "users"
  const localUsers = localStorage.getItem('users');

  // kapag wala pa, i-seed natin yung "users" sa localStorage 
  // gamit yung laman ng .json file natin
  if(!localUsers) {
    localStorage.setItem('users', JSON.stringify(accountData));
  }
  // once meron nang laman yung "users" sa localStorage
  // pwede na siya i-interact from any component

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/userCreation" element={<UserCreation />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
