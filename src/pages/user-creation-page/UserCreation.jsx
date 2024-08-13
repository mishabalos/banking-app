import React, {useState} from 'react';
import SideNav from '../../components/SideNav/SideNav';
import './UserCreation.css'; // Importing the CSS file

const UserCreation = () => {
  // etong random number generator, para sa account number
  const generateRandomNumber = () => {
    // Generate a random number between 1 and 9999999999
    const randomNumber = Math.floor(Math.random() * 9999999999) + 1;
    // Format the number to ensure it has 10 digits, padding with leading zeros if needed
    return randomNumber.toString().padStart(10, '0');
  };

  // eto naman pang-initialize ng mga form fields
  const [formData, setFormData] = useState({
    accountName: '',      // for storing name input
    totalBalance: '',     // for storing balance input
    email: '',     // for storing email input
    password: '',      // for storing password input
    accountNumber: generateRandomNumber()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value    // update state with the new input value
    });
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();    // prevent form from refreshing the page
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.unshift(formData);
    localStorage.setItem('users', JSON.stringify(users)); // store users data in localStorage
    alert('New user created!'); // simple feedback to user
  };

  return (
    <div className="userCreation-container">
      <div className="sidenav-container">
        <SideNav />
      </div>

      <div className="create-content">
        <h1 className="createrHeader">Create Account</h1>
        
        <div className="create-box">
          <p className="createTitle">Create a new client account.</p>
          <form className="createForm" onSubmit={handleSubmit}>
            <label className="createLabels">FULL NAME</label>
            <input className="createInput" type="text" name="accountName" value={formData.accountName} onChange={handleChange} required></input>

            <label className="createLabels">ACCOUNT # (RANDOMLY GENERATED)</label>
            <input className="createInput" 
              type="text"
              value={formData.accountNumber}
              readOnly></input>

            <label className="createLabels">INITIAL BALANCE</label>
            <input className="createInput" type="text" name="totalBalance" value={formData.totalBalance} onChange={handleChange}  placeholder="0.00"></input>

            <label className="createLabels">EMAIL ADDRESS</label>
            <input className="createInput" type="email" name="email" value={formData.email} onChange={handleChange}  required></input>

            <label className="createLabels">PASSWORD</label>
            <input className="createInput" type="password" name="password" value={formData.password} onChange={handleChange} required></input>

            <button className="createButton">CREATE ACCOUNT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreation;
