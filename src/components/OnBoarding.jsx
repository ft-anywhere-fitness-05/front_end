import React from 'react'
import { connect } from 'react-redux';

// import postOnBoarding from "./../utils/postOnBoarding"

import axiosWithAuth from "./../utils/axiosWithAuth"

const Onboarding = (props) => {
  const { userType, onBoarded } = props;

  // const tempUserType = "client"
  console.log(userType)
  console.log(onBoarded)

  const postOnBoarding = () => {
    console.log("You are inside postOnBoarding")
    axiosWithAuth()
      .post("https://fitnessapplambda5.herokuapp.com/api/users", {on_boarding: true})
      .then(res => {})
      .catch(err => {})
  }

  return (
    <div>
      {(userType === "client") && 
      
      <div className="clientOnboarding">
        <h3>Welcome, Student!</h3>
        <p>You are able to search for classes and sign up for classes so long as there is room available.</p>
        <p>Happy exercising!</p>
        <button onClick={postOnBoarding}>Finish</button>
      </div>}

      {(userType === "instructor") && 
      
      <div className="instructorOnboarding">
        <h3>Welcome, Instructor!</h3>
        <p>You have all the tools necessary to add, update, and delete classes with the respective buttons.</p>
        <p>Happy exercising!</p>
        <button onClick={postOnBoarding}>Finish</button>
      </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userType: state.user.userType,
    onBoarded: state.user.onBoarded
  }
}

export default connect(mapStateToProps)(Onboarding)