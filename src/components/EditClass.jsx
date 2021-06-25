import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";
import { editClass } from "../actions/classActions";

const initialFormValues = {
  class_name: "",
  type_id: 0,
  location: "",
  start_time: "",
  duration: "",
  intensity: "",
  class_description: "",
  max_class_size: "",
};

const EditClass = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axiosWithAuth()
      .get(`https://fitnessapplambda5.herokuapp.com/api/classes/${id}`)
      .then((res) => {
        setFormValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editClass(id, formValues));
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
          value={formValues.class_name}
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
          value={formValues.location}
          onChange={handleChange}
          name="location"
          type="text"
        />
        <label>Start Time</label>
        <input
          value={formValues.start_time}
          onChange={handleChange}
          name="start_time"
          type="text"
        />
        <label>duration</label>
        <input
          value={formValues.duration}
          onChange={handleChange}
          name="duration"
          type="text"
        />
        <label>Intensity</label>
        <input
          value={formValues.intensity}
          onChange={handleChange}
          name="intensity"
          type="text"
        />
        <label>Class Description</label>
        <input
          value={formValues.class_description}
          onChange={handleChange}
          name="class_description"
          type="text"
        />
        <label>Max Class Size</label>
        <input
          value={formValues.max_class_size}
          onChange={handleChange}
          name="max_class_size"
          type="text"
        />
        <button type="submit">Submit Changes</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditClass;
