import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/reservations">My Classes</Link>
      <Link onClick={logout}>Logout</Link>
    </div>
  );
};

export default Navigation;
