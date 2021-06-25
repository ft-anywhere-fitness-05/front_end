import React, { useEffect } from "react";
import { connect } from "react-redux";

import postOnBoarding from "./../utils/postOnBoarding";

// import axiosWithAuth from "./../utils/axiosWithAuth"
// import axios from 'axios';

const Onboarding = (props) => {
  const { userType, onBoarded } = props;

  useEffect(() => {
    console.log("Onboarding component has loaded. Onboarding is", onBoarded);
    setTimeout(() => {
      if (onBoarded === true) {
        props.history.push("/dashboard");
      }
    }, 1000);
  }, [onBoarded, props.history]);

  const handleFinish = () => {
    postOnBoarding();
    props.history.push("/dashboard");
  };

  return (
    <div>
      {userType === "client" && (
        <div className="clientOnboarding">
          <h3>Welcome, Student!</h3>
          <p>
            You are able to search for classes and sign up for classes so long
            as there is room available.
          </p>
          <p>Happy exercising!</p>
          <button onClick={handleFinish}>Finish</button>
        </div>
      )}

      {userType === "instructor" && (
        <div className="instructorOnboarding">
          <h3>Welcome, Instructor!</h3>
          <p>
            You have all the tools necessary to add, update, and delete classes
            with the respective buttons.
          </p>
          <p>Happy exercising!</p>
          <button onClick={handleFinish}>Finish</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userType: state.user.userType,
    onBoarded: state.user.onBoarded,
  };
};

export default connect(mapStateToProps)(Onboarding);
