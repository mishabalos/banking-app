import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SideNav.css';
import logo from '../../assets/images/avionbank-logo-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  // const [accountType, setAccountType] = useState(null);


  const handleLogout = () => {
    // Clear user session data (if stored in localStorage or cookies)
    localStorage.removeItem('userSession'); // Example: clear user session data
    localStorage.removeItem('accountType'); // Clear the account type as well
    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="sidenav">
      <div className="sidenav-menu">
        <div className="sidenav-logo">
          <img src={logo} alt="Avion Bank Logo" />
        </div>
        <ul>
          <li>
            <a href="/home">Accounts</a>
          </li>
          {currentUser.accountType === 'admin' && (
            <>
              <li>
                <a href="/transaction">Transactions</a>
              </li>
              <li>
                <a href="/usercreation">Create Account</a>
              </li>
            </>
          )}
          <li>
            <a href="/budget">Budget App</a>
          </li>
        </ul>
      </div>
      <div className="sidenav-account">
        <a href="/" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout
        </a>
      </div>
    </div>
  );
};

export default SideNav;