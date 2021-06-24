import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const userType = useSelector((state) => state.user.userType);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      {userType === "client" && <Link to="/reservations">My Classes</Link>}
      <Link onClick={logout}>Logout</Link>
    </div>
  );
};

export default Navigation;
