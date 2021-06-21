import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Registration from "./components/Registration";
import ClassDashboard from "./components/ClassDashboard";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/dashboard" component={ClassDashboard} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
