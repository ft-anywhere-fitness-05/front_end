import React, { useState, useEffect } from "react";
import AddClass from "./AddClass";
import { connect } from "react-redux";

import { fetchClasses } from "../actions/classActions";
import axiosWithAuth from "../utils/axiosWithAuth";

const ClassDashboard = (props) => {
  const { classes, isLoading, error } = props;

  useEffect(() => {
    props.dispatch(fetchClasses());
  }, []);

  if (isLoading) {
    return <h2>Loading classes...</h2>;
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  return (
    <div className="dashboard">
      <div>
        <button>Add Class</button>
        <AddClass />
      </div>
      {classes.map((c) => (
        <div key={c.class_id}>
          <h2>Name: {c.class_name}</h2>
          <h3>Location: {c.location}</h3>
          <h4>Start Time: {c.start_time}</h4>
          <h4>Duration: {c.duration}</h4>
          <h4>Intensity: {c.intensity}</h4>
          <p>Class Description: {c.class_description}</p>
          <p>
            Class Size: current: {c.current_class_size} / max:{" "}
            {c.max_class_size}
          </p>
          <div className="instructor-buttons">
            <button>Update</button>
            <button>Delete</button>
          </div>
          <div className="client-buttons">
            <button>Join</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(ClassDashboard);
