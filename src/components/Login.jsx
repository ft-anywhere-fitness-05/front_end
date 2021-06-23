import React, { useState } from "react";
import axios from "axios";

import axiosWithAuth from "../utils/axiosWithAuth";

import { connect } from "react-redux";
import { stashUserData } from "./../actions/userInformationActions"

const initialCredentials = {
  username: "",
  password: "",
};

function Login(props) {
  const [credentials, setCredentials] = useState(initialCredentials);

  const { id, userType } = props;
  // const [id, setId] = useState(initialId)

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
        //I will need to add the id from the response to state once this is built into the API
        props.dispatch(stashUserData(res.data))
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
      
      // axiosWithAuth().get("https://fitnessapplambda5.herokuapp.com/api/users/1")
      //   .then(res => {console.log(res)})
      //   .catch(err => {console.log(err)})

      // props.dispatch(determineId())

      // props.dispatch(checkInstructor(1))
      // console.log()
      console.log(id)
      console.log(userType)

  };

  return (
    <div className='login'>
      <h3>Log In</h3>
      <form onSubmit={handleLogin}>
        <input value={credentials.username} type="text" name="username" onChange={handleChange} />
        <input value={credentials.password} type="password" name="password" onChange={handleChange} />
        <button>Log In</button>
      </form>
      <p>Don't have an account?</p>
      <a href="/register">Register Here</a>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.id,
    userType: state.userType
  }
}

export default connect(mapStateToProps)(Login);

// export default Login

// const mapStateToProps = (state) => {
//   return {
//     classes: state.classes,
//     isLoading: state.isLoading,
//     error: state.error,
//   };
// };

// export default connect(mapStateToProps)(ClassDashboard);
