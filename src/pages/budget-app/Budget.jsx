import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import "./Budget.css"; // Importing the CSS file


const Budget = () => {
  return (
    <div className="home-container">
      <div className="sidenav-container">
        <SideNav />
      </div>

      <form id="form" class="budget">
        <h1>Budget App</h1>
        <div>Start budgeting your money with our built in app.</div>
        <div id="budget">
          <div class="budget-menu">
            <div>
              <button class="btn2">
                <i class="bx bx-book-add"></i> Add budget
              </button>
            </div>
            <div>
              <label>Remaining Budget</label>
              <h1 class="">500</h1>
            </div>
          </div>
          <div class="budget-body"></div>
        </div>
      </form>
      <div class="overlay">
        <div class="modal">
            <form>
                <h2 class="title">add budget</h2>
                <label>description</label>
                <textarea name="title"></textarea>
                <label>Amount</label>
                <input type="text" name="amount" autocomplete="off" />
                <button type="button" class="btn2 btn-muted">Cancel</button>
                <button type="submit" class="btn2">add Budget</button>
            </form>
        </div>
      </div>
    </div>
  );
};


export default Budget;
