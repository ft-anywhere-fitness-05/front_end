import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  DELETE_CLASS,
  ADD_CLASS,
} from "../actions/classActions";

export const initialState = {
  classes: [],
  isLoading: false,
  error: "",
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
    case ADD_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case DELETE_CLASS:
      return {
        ...state,
        classes: [state.classes.filter((c) => c.class_id !== action.payload)],
      };
    default:
      return state;
  }
};

// export default classReducer;
