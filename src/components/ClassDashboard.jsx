import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchClasses, joinClass, deleteClass } from "../actions/classActions";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

const ClassDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { classes, isLoading, error } = useSelector((state) => state.classes);
  const userType = useSelector((state) => state.user.userType);
  const userId = useSelector((state) => state.user.id);
  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  const filterClasses = (classes, query) => {
    if (!query) {
      return classes;
    }

    return classes.filter((c) => {
      const className = c.class_name.toLowerCase();
      return className.includes(query);
    });
  };

  const filteredClasses = filterClasses(classes, searchQuery);

  const handleAdd = () => {
    push("/add-class");
  };

  const handleEdit = (id) => {
    push(`/edit-class/${id}`);
  };

  const handleJoin = (userId, classId) => {
    const info = { user_id: userId, class_id: classId };
    dispatch(joinClass(info));
  };

  const handleDelete = (id) => {
    dispatch(deleteClass(id));
  };

  if (isLoading) {
    return <h2>Loading classes...</h2>;
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  return (
    <div>
      <Navigation />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {userType === "instructor" && (
        <div>
          <button onClick={handleAdd}>Add Class</button>
        </div>
      )}
      <div className="dashboard-container">
        {filteredClasses.map((c) => (
          <div className="dashboard-info" key={c.class_id}>
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
            {userType === "instructor" ? (
              <div className="instructor-buttons">
                <button onClick={() => handleEdit(c.class_id)}>Update</button>
                <button onClick={() => handleDelete(c.class_id)}>Delete</button>
              </div>
            ) : (
              <div className="client-buttons">
                <button onClick={() => handleJoin(userId, c.class_id)}>
                  Join
                </button>{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDashboard;
