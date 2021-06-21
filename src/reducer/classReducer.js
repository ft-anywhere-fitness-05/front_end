import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from "../actions/classActions";

export const initialState = {
  classes: [],
  isLoading: false,
  error: "",
  formValues: {
    name: "",
    location: "",
    start_time: "",
    duration: "",
    intensity: "",
    class_description: "",
    current_class_size: 0,
    max_class_size: "",
  },
};

export const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        classes: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// export default classReducer;
