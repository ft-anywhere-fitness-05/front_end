import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const RESERVATIONS_SET = "RESERVATIONS_SET";
export const CLASS_ADDED = "CLASS_ADDED";
export const CLASS_EDITED = "CLASS_EDITED";
export const CLASS_JOINED = "CLASS_JOINED";
export const CLASS_DELETED = "CLASS_DELETED";

export const fetchClasses = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axiosWithAuth()
      .get("https://fitnessapplambda5.herokuapp.com/api/classes/")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const fetchReservationList = (userId) => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`https://fitnessapplambda5.herokuapp.com/api/user-classes/${userId}`)
      .then((res) => {
        dispatch(setReservations(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addClass = (newClass) => {
  return (dispatch) => {
    axiosWithAuth()
      .post("https://fitnessapplambda5.herokuapp.com/api/classes/", newClass)
      .then((res) => {
        dispatch(classAdded(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editClass = (id, editedClass) => {
  return (dispatch) => {
    axiosWithAuth()
      .patch(
        `https://fitnessapplambda5.herokuapp.com/api/classes/${id}`,
        editedClass
      )
      .then((res) => {
        dispatch(classEdited(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const joinClass = (info) => {
  return (dispatch) => {
    axiosWithAuth()
      .post(`https://fitnessapplambda5.herokuapp.com/api/user-classes`, info)
      .then((res) => {
        dispatch(classJoined(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteClass = (id) => {
  return (dispatch) => {
    axiosWithAuth()
      .delete(`https://fitnessapplambda5.herokuapp.com/api/classes/${id}/`)
      .then(() => {
        dispatch(classDeleted(id));
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const setReservations = (reservedClasses) => {
  return { type: RESERVATIONS_SET, payload: reservedClasses };
};

export const fetchSuccess = (classes) => {
  return { type: FETCH_SUCCESS, payload: classes };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const classAdded = (newClass) => {
  return { type: CLASS_ADDED, payload: newClass };
};

export const classEdited = (editedClass) => {
  return { type: CLASS_EDITED, payload: editedClass };
};

export const classJoined = (joinedClass) => {
  return { type: CLASS_JOINED, payload: joinedClass };
};

export const classDeleted = (id) => {
  return { type: CLASS_DELETED, payload: id };
};
