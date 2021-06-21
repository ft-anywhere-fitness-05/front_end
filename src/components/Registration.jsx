import React, { useState } from "react";
import axios from "axios";

const initialCredentials = {
  username: "",
  password: "",
  authCode: "",
};

function Registration() {
  const [credentials, setCredentials] = useState(initialCredentials);

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
        // localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
        <input type="text" name="username" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <input type="text" name="authCode" onChange={handleChange} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Registration;
