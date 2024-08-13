import React, { useState } from 'react';
<<<<<<< Updated upstream
import Homepage from './Homepage';
import CreateAccount from './CreateAccount';
=======
// import Homepage from './Homepage';
// import CreateAccount from './CreateAccount';
>>>>>>> Stashed changes

function bankUsers() {
  const [accounts, setAccounts] = useState([
    // Initial dummy data, can be empty
    { number: '1234567890', name: 'John Doe', email: 'john@example.com', balance: 1000 },
  ]);

<<<<<<< Updated upstream
  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };
=======
//   const addAccount = (newAccount) => {
//     setAccounts([...accounts, newAccount]);
//   };
>>>>>>> Stashed changes

  return (
    <div className="app-container">
      {/* Assuming you have a routing setup, or you can conditionally render these components */}
      <Homepage accounts={accounts} />
      <CreateAccount addAccount={addAccount} />
    </div>
  );
}

export default bankUsers;
