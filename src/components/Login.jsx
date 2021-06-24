import React, { useState } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { stashUserData } from "./../actions/userInformationActions";

import { fetchLogin } from "./../actions/userInformationActions"

const initialCredentials = {
  username: "",
  password: "",
};

function Login(props) {
  const [credentials, setCredentials] = useState(initialCredentials);

  const { onBoarded, userType } = props;

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    props.dispatch(fetchLogin(credentials))

    setTimeout(function(){
      props.history.push("/onboarding")
    }, 5000)
  }

  return (
    <div className="login">
      <h3>Log In</h3>
      <form onSubmit={handleLogin}>
        <input
          value={credentials.username}
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          value={credentials.password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
      <p>Don't have an account?</p>
      <a href="/register">Register Here</a>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    onBoarded: state.user.on_boarding,
    userType: state.user.userType
  };
};

export default connect(mapStateToProps)(Login);
