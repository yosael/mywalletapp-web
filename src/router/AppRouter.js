import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Account from "../pages/accounts/Account";
import Dashboard from "../components/dashboard/Dashboard";
import Incomes from "../components/transactions/Incomes";
import Expenses from "../components/transactions/Expenses";
import Navbar from "../template/Navbar";

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/accounts">
            <Account />
          </Route>
          <Route path="/incomes">
            <Incomes />
          </Route>
          <Route path="/expenses">
            <Expenses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
