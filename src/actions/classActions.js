import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_CLASS = "ADD_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";

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

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (classes) => {
  return { type: FETCH_SUCCESS, payload: classes };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const addClass = (newClass) => {
  return { type: ADD_CLASS, payload: newClass };
};

export const deleteClass = (id) => {
  return { type: DELETE_CLASS, payload: id };
};
