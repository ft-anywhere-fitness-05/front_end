import React, { useState, useEffect } from "react";
import axios from "axios";

const ClassDashboard = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://fitnessapplambda5.herokuapp.com/api/classes/")
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        console.log("GET Error: ", err);
      });
  }, []);

  return (
    <div className="dashboard">
      {classes.map((c) => (
        <div key={c.class_id}>
          <h3>Name: {c.class_name}</h3>
          <h4>Start Time: {c.start_time}</h4>
          <h4>Duration: {c.duration}</h4>
          <h4>Intensity: {c.intensity}</h4>
          <p>Class Description: {c.class_description}</p>
          <p>
            Class Size: current: {c.current_class_size} / max:{" "}
            {c.max_class_size}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClassDashboard;
