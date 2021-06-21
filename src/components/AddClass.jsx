import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  location: "",
  start_time: "",
  duration: "",
  intensity: "",
  class_description: "",
  current_class_size: 0,
  max_class_size: "",
};

const AddClass = () => {
  const [newClass, setNewClass] = useState(initialFormValues);

  const handleChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    axiosWithAuth()
      .post("https://fitnessapplambda5.herokuapp.com/api/classes/", newClass)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Class Name</label>
        <input
          value={newClass.name}
          onChange={handleChange}
          name="name"
          type="text"
        />
        <label>Location</label>
        <input
          value={newClass.location}
          onChange={handleChange}
          name="location"
          type="text"
        />
        <label>Start Time</label>
        <input
          value={newClass.start_time}
          onChange={handleChange}
          name="start_time"
          type="text"
          placeholder="00:00:00"
        />
        <label>duration</label>
        <input
          value={newClass.duration}
          onChange={handleChange}
          name="duration"
          type="text"
          placeholder="00:00:00"
        />
        <label>Intensity</label>
        <input
          value={newClass.intensity}
          onChange={handleChange}
          name="intensity"
          type="text"
          placeholder="1 - 5"
        />
        <label>Class Description</label>
        <input
          value={newClass.class_description}
          onChange={handleChange}
          name="class_description"
          type="text"
        />
        <label>Max Class Size</label>
        <input
          value={newClass.max_class_size}
          onChange={handleChange}
          name="max_class_size"
          type="text"
        />
        <button type="submit">Submit New Class</button>
      </form>
    </div>
  );
};

export default AddClass;
