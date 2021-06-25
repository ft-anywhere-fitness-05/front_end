import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const initialCredentials = {
  username: "",
  password: "",
  authCode: "",
};

function Registration(props) {
  const [credentials, setCredentials] = useState(initialCredentials);
  const { push } = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("You have registered", credentials);
    axios
      .post(
        "https://fitnessapplambda5.herokuapp.com/api/auth/register",
        credentials
      )
      .then((res) => {
        console.log(res);
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="registration">
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
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
        <input
          value={credentials.authCode}
          type="text"
          name="authCode"
          placeholder="Authorization Code"
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Registration;
