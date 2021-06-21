import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
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
    default:
      return state;
  }
};

// export default classReducer;
