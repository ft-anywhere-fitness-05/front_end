import React from "react";
import "./App.css";

import Registration from "./components/Registration";
import ClassDashboard from "./components/ClassDashboard";
import Login from "./components/Login";
import EditClass from "./components/EditClass";

function App() {
  return (
    <div>
      <ClassDashboard />
      <Login />
      <Registration />
      <EditClass />
    </div>
  );
}

export default App;
