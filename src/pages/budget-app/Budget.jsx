import React, { useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import "./Budget.css"; // Importing the CSS file

function Budget() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [budget, setBudget] = useState(parseFloat(currentUser.totalBalance.replace(/,/g,'')));
  const [lineItems, setLineItems] = useState([]);

  function addLineItem(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name");
    const amount = form.get("amount");
    const modal = document.getElementById("lineitem-modal");
    modal.style.display = "none";
    if (budget - amount < 0) {
      alert("You can't spend more than your budget!");
      return;
    } else {
      setLineItems([...lineItems, { name, amount }]);
      setBudget(budget - amount);
      return;
    }
  }

  function deleteLineItem(index) {
    return () => {
      setLineItems(lineItems.filter((_, i) => i !== index));
      const amount = lineItems[index].amount;
      setBudget(parseInt(budget) + parseInt(amount)); 
    };
  }

  return (
    <div className="home-container">
      <div className="sidenav-container">
        <SideNav />
      </div>

      <div id="budget">
        <div className="budgetContainer">
          <div className="budgetMain">
            <h1 className="budgetHeader">Budget App</h1>
            <p>Start budgeting your money with our built in app.</p>
            <button
              onClick={() => {
                const modal = document.getElementById("lineitem-modal");
                modal.style.display = "block";
              }}
            >
              ADD BUDGET
            </button>
          </div>
          <h1>Remaining Budget: {budget}</h1>
        </div>
        
        <div id="lineitem-modal" style={{ display: "none" }}>
          <form onSubmit={addLineItem} id="lineItemForm">
            <input name="name" type="text" placeholder="Description" />
            <input name="amount" type="number" placeholder="Amount" />
            <button type="submit">Add</button>
          </form>
        </div>
        <ul>
          {lineItems.map((lineItem, index) => (
            <li key={index}>
              {lineItem.name}: {lineItem.amount}{" "}
              <button onClick={deleteLineItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Budget;
