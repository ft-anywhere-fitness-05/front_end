import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const CLASS_ADDED = "CLASS_ADDED";
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

export const joinClass = (info) => {
  return () => {
    axiosWithAuth().post(
      `https://fitnessapplambda5.herokuapp.com/api/user-classes`,
      info
    );
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

export const fetchSuccess = (classes) => {
  return { type: FETCH_SUCCESS, payload: classes };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const classAdded = (newClass) => {
  return { type: CLASS_ADDED, payload: newClass };
};

export const classDeleted = (id) => {
  return { type: CLASS_DELETED, payload: id };
};
