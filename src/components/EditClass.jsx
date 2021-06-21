import react, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValues = {
  class_name: "",
  location: "",
  start_time: "",
  duration: "",
  intensity: "",
  class_description: "",
  max_class_size: "",
};

const EditClass = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosWithAuth().get(
          `https://fitnessapplambda5.herokuapp.com/api/classes/${id}`
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Class Name</label>
        <input
          value={formValues.class_name}
          onChange={handleChange}
          name="name"
          type="text"
        />
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
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default EditClass;
