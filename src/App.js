import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/login-page/Login'; 
import Home from './pages/home-page/Home';
import Transaction from './pages/transaction-page/Transaction';
import UserCreation from './pages/user-creation-page/UserCreation';
import './App.css';



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} /> {}
        <Route path="/home" element={<Home />} /> {}
        <Route path="/transaction" element={<Transaction />} /> {}
        <Route path="/userCreation" element={<UserCreation />} /> {}
        {}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
