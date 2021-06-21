import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialCredentials = {
  username: "",
  password: "",
};

function Login() {
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You have logged in", credentials);
    // axiosWithAuth().post('https://fitnessapplambda5.herokuapp.com/api/auth/login', null)
  };

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
