import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Navigation from "./components/Navigation";
import Registration from "./components/Registration";
import ClassDashboard from "./components/ClassDashboard";
import ReservationList from "./components/ReservationList";
import Login from "./components/Login";
import AddClass from "./components/AddClass";
import EditClass from "./components/EditClass";
import ProtectedRoute from "./components/ProtectedRoute";

import OnBoarding from "./components/OnBoarding";

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/dashboard" component={ClassDashboard} />
        <ProtectedRoute path="/reservations" component={ReservationList} />

        <ProtectedRoute path="/onboarding" component={OnBoarding} />

        <ProtectedRoute path="/add-class" component={AddClass} />
        <ProtectedRoute path="/edit-class/:id" component={EditClass} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
