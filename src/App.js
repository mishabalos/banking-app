import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/login-page/Login';
import Home from './pages/home-page/Home';
import Transaction from './pages/transaction-page/Transaction';
import UserCreation from './pages/user-creation-page/UserCreation';
import SideNav from './components/SideNav/SideNav';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideNav />
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
