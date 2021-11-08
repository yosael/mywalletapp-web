import React from "react";
import ExchangeRate from "../exchangeRates/ExchangeRate";
import './Dashboard.css';
import ExpenseLastDays from "./expense/ExpenseLastDays";
import ExpenseReport from "./expense/ExpenseReport";
import CompareReport from "./transactions/CompareReport";
import Last5Records from "./transactions/Last5Records";

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
          <div className="dashItemTitle" >Cash Flow</div>
          <div className="dashItemContent">
            <CompareReport />
          </div>
        </div>
        <div className="dashItem1Level">
          <div className="dashItemTitle" >Last Records</div>
          <div className="dashItemContent2">
            <Last5Records />
          </div>
        </div>
        <div className="dashItem1Level">
          <div className="dashItemTitle" >Exchange Rates</div>
          <div className="dashItemContent3">
            <ExchangeRate />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
