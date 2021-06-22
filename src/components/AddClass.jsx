import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValues = {
  class_name: "Yoga",
  type_id: 0,
  location: "San Francisco, CA",
  start_time: "12:30:00",
  duration: "01:00:00",
  intensity: 5,
  class_description: "It's just yoga.",
  current_class_size: 0,
  max_class_size: 15,
  date:'2021-07-05'
};

const AddClass = () => {
  const [newClass, setNewClass] = useState(initialFormValues);

  const handleChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  console.log(newClass)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newClass)
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
          value={newClass.class_name}
          onChange={handleChange}
          name="class_name"
          type="text"
        />
        <label>Type</label>
        <select onChange={handleChange} name='type_id'>
            <option value={1}>Yoga</option>
            <option value={2}>Dance</option>
            <option value={3}>HIIT</option>
            <option value={4}>Full Body Fusion</option>
            <option value={5}>Circuit Training</option>
            <option value={6}>Water Aerobics</option>
            <option value={7}>Cycling</option>
            <option value={8}>Bootcamp</option>
            <option value={9}>Conditioning</option>
            <option value={10}>Kickboxing</option>
        </select>
        <label>Location</label>
        <input
          value={newClass.location}
          onChange={handleChange}
          name="location"
          type="text"
        />
        <label>Date</label>
        <input
          value={newClass.date}
          onChange={handleChange}
          name="date"
          type="text"
          placeholder='YYYY-MM-DD'
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
          placeholder="1 - 10"
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
