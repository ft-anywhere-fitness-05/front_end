import React from "react";
import "./App.css";

import Registration from "./components/Registration";
import ClassDashboard from "./components/ClassDashboard";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <ClassDashboard />
      <Login />
      <Registration />
    </div>
  );
}

export default App;
