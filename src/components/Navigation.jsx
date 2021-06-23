import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = (props) => {
  const { userType } = props;

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

const mapStateToProps = (state) => {
  return {
    userType: state.user.userType,
  };
};

export default connect(mapStateToProps)(Navigation);
