import React, { useState } from "react";
import axios from "axios";

const initialCredentials = {
  username: "",
  password: "",
};

function Login() {
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("You have logged in", credentials);
    axios
      .post(
        "https://fitnessapplambda5.herokuapp.com/api/auth/login",
        credentials
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
