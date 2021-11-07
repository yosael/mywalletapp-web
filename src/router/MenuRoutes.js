import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AccountPageList from "../pages/accounts/AccountPageList";
import AccountPage from "../pages/accounts/AccountPage";
import Dashboard from "../components/dashboard/Dashboard";
import Incomes from "../components/transactions/Incomes";
import Expenses from "../components/transactions/Expenses";
import Navbar from "../template/Navbar";
import TransactionPageList from "../pages/transactions/TransactionPageList";
import TransactionPage from "../pages/transactions/TransactionPage";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";

const AppRouter = () => {
  return (
    <Router>
      <div>
        {/*<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>*/}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar />
        <Switch>
          <Route path="/" exact >
            <DashboardPage />
          </Route>
          <Route path="/accounts">
            <AccountPageList />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/transactions">
            <TransactionPageList />
          </Route>
          <Route path="/transaction">
            <TransactionPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
