import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import axiosWithAuth from "../utils/axiosWithAuth";

const ReservationList = () => {
  const [classes, setClasses] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`https://fitnessapplambda5.herokuapp.com/api/user-classes/:user_id`) //Needs user id
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleDelete = (classId) => {
    axiosWithAuth()
      .delete(
        `https://fitnessapplambda5.herokuapp.com/api/user-classes/:user_id/${classId}` //Needs user id
      )
      .then((res) => {
        console.log(res); //Needs redirect??
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBack = () => {
    push("/dashboard");
  };

  return (
    <div>
      {classes.map((c) => (
        <div key={c.class_id}>
          <h2>Name: {c.class_name}</h2>
          <h3>Location: {c.location}</h3>
          <h3>Date: {c.date}</h3>
          <h4>Start Time: {c.start_time}</h4>
          <h4>Duration: {c.duration}</h4>
          <h4>Intensity: {c.intensity}</h4>
          <p>Class Description: {c.class_description}</p>
          <div className="buttons">
            <button onClick={() => handleDelete(c.class_id)}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={handleBack}>Back to Class Sign-up</button>
    </div>
  );
};

export default ReservationList;
