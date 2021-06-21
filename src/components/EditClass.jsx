import react from "react";

const EditClass = () => {
  <div key={c.class_id}>
    <h2>Name: {c.class_name}</h2>
    <h3>Location: {c.location}</h3>
    <h4>Start Time: {c.start_time}</h4>
    <h4>Duration: {c.duration}</h4>
    <h4>Intensity: {c.intensity}</h4>
    <p>Class Description: {c.class_description}</p>
    <p>
      Class Size: current: {c.current_class_size} / max: {c.max_class_size}
    </p>
    <div className="instructor-buttons">
      <button>Update</button>
      <button>Delete</button>
    </div>
    <div className="client-buttons">
      <button>Join</button>
    </div>
  </div>;
};