import { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Feature from "./components/Feature/Feature";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/feature">
            <Feature />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/blog">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
