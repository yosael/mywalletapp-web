import React from "react";
import './Dashboard.css';
import ExpenseReport from "./expense/ExpenseReport";

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
          <div className="dashItemTitle" >Last Expenses</div>
          <div className="dashItemContent">
            Grafics 2
          </div>
        </div>
        <div className="dashItem1Level">
          <div className="dashItemTitle" >Balance</div>
          <div className="dashItemContent">
            Grafics 3
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
