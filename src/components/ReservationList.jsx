import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservationList } from "../actions/classActions";

import Navigation from "./Navigation";

import axiosWithAuth from "../utils/axiosWithAuth";

const ReservationList = () => {
  const reservedClasses = useSelector((state) => state.reservedClasses);
  const userId = useSelector((state) => state.user.id);
  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservationList(userId));
  }, []);

  const handleDelete = (classId) => {
    axiosWithAuth()
      .delete(
        `https://fitnessapplambda5.herokuapp.com/api/user-classes/${userId}/${classId}`
      )
      .then((res) => {
        console.log(res);
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
      <Navigation />
      <div>
        {reservedClasses.map((c) => (
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
    </div>
  );
};

export default ReservationList;
