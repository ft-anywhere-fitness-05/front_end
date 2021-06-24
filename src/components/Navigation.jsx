import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchBar from "./SearchBar";

const Navigation = () => {
  const userType = useSelector((state) => state.user.userType);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        {userType === "client" && <Link to="/reservations">My Classes</Link>}
        <Link onClick={logout}>Logout</Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navigation;
