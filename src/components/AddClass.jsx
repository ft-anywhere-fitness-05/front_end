import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addClass } from "../actions/classActions";

import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValues = {
  class_name: "Yoga",
  type_id: 1,
  location: "San Francisco, CA",
  start_time: "12:30:00",
  duration: "01:00:00",
  intensity: 5,
  class_description: "It's just yoga.",
  current_class_size: 0,
  max_class_size: 15,
  date: "2021-07-05",
};

const AddClass = () => {
  const [newClass, setNewClass] = useState(initialFormValues);
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "type_id") {
      value = parseInt(value, 10);
    }

    setNewClass({ ...newClass, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClass(newClass));
    push("/dashboard");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    push("/dashboard");
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
        <select onChange={handleChange} name="type_id">
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
          placeholder="YYYY-MM-DD"
        />
        <label>Start Time</label>
        <input
          value={newClass.start_time}
          onChange={handleChange}
          name="start_time"
          type="text"
          placeholder="00:00:00"
        />
        <label>Duration</label>
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
          type="number"
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
          type="number"
        />
        <button type="submit">Submit New Class</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddClass;
