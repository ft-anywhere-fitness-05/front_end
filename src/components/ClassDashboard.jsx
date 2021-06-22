import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { fetchClasses } from "../actions/classActions";
import axiosWithAuth from "../utils/axiosWithAuth";

const ClassDashboard = (props) => {
  const { classes, isLoading, error } = props;
  const { push } = useHistory();

  useEffect(() => {
    props.dispatch(fetchClasses());
  }, []);

  const handleAdd = () => {
    push("/add-class");
  };

  const handleEdit = (id) => {
    push(`/edit-class/${id}`);
  };

  const handleJoin = (userId, classId) => {
    const info = { user_id: userId, class_id: classId };
    axiosWithAuth()
      .post(`https://fitnessapplambda5.herokuapp.com/api/user-classes`, info)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`https://fitnessapplambda5.herokuapp.com/api/classes/${id}/`)
      .then(() => {
        props.dispatch(fetchClasses());
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  if (isLoading) {
    return <h2>Loading classes...</h2>;
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  return (
    <div className="dashboard">
      <div>
        <button onClick={handleAdd}>Add Class</button>
      </div>
      {classes.map((c) => (
        <div key={c.class_id}>
          <h2>Name: {c.class_name}</h2>
          <h3>Location: {c.location}</h3>
          <h3>Date: {c.date}</h3>
          <h4>Start Time: {c.start_time}</h4>
          <h4>Duration: {c.duration}</h4>
          <h4>Intensity: {c.intensity}</h4>
          <p>Class Description: {c.class_description}</p>
          <p>
            Class Size: current: {c.current_class_size} / max:{" "}
            {c.max_class_size}
          </p>
          <div className="instructor-buttons">
            <button onClick={() => handleEdit(c.class_id)}>Update</button>
            <button onClick={() => handleDelete(c.class_id)}>Delete</button>
          </div>
          <div className="client-buttons">
            <button onClick={handleJoin()}>Join</button>
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
