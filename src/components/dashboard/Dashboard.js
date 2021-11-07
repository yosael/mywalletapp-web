import React from "react";
import './Dashboard.css';
import ExpenseLastDays from "./expense/ExpenseLastDays";
import ExpenseReport from "./expense/ExpenseReport";
import CompareReport from "./transactions/CompareReport";

const Dashboard = () => {
  console.log("loading dashboard");
  return (
    <main>
      <div className="dashContainer">
        <div className="dashItem1Level">
          <div className="dashItemTitle" >Expenses</div>
          <div className="dashItemContent">
            <ExpenseReport />
          </div>
        </div>
        <div className="dashItem1Level">
          <div className="dashItemTitle" >Expenses Last 30 days</div>
          <div className="dashItemContent">
            <ExpenseLastDays />
          </div>
        </div>
        <div className="dashItem1Level">
          <div className="dashItemTitle" >Balance</div>
          <div className="dashItemContent">
            <CompareReport />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
