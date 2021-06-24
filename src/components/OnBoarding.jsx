import React from 'react'
import { connect } from 'react-redux';

const Onboarding = (props) => {
  const { userType } = props;

  const tempUserType = "client"

  return (
    <div>
      {(tempUserType === "client") && 
      
      <div className="clientOnboarding">
        <h3>Welcome, Student!</h3>
        <p>You are able to search for classes and sign up for classes so long as there is room available.</p>
        <p>Happy exercising!</p>
        <button>Finish</button>
      </div>}

      {(tempUserType === "instructor") && 
      
      <div className="instructorOnboarding">
        <h3>Welcome, Instructor!</h3>
        <p>You have all the tools necessary to add, update, and delete classes with the respective buttons.</p>
        <p>Happy exercising!</p>
        <button>Finish</button>
      </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userType: state.user.userType
  }
}

export default connect(mapStateToProps)(Onboarding)