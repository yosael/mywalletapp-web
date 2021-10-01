import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import MenuRoutes from './MenuRoutes';
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useContext } from "react";
import AuthContext from "../context/auth-context";

const AppRouter = () => {
  //const user = {logged:false};
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Router>
          <div>
              <Switch>
                  <PublicRoutes path="/login" component={LoginPage} exact isAuthenticated={currentUser ? true : false }/>
                  <PublicRoutes path="/register" component={RegisterPage} exact isAuthenticated={currentUser ? true : false}/>
                  <PrivateRoutes path="/" component={MenuRoutes} isAuthenticated={currentUser ? true : false} />
              </Switch>
          </div>
     </Router>
  );
}

export default AppRouter;
