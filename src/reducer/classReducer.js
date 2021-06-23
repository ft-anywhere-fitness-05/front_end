import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  CLASS_DELETED,
  CLASS_ADDED,
  CLASS_EDITED,
  CLASS_JOINED,
  RESERVATIONS_SET,
} from "../actions/classActions";

export const initialState = {
  classes: [],
  reservedClasses: [],
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
    case RESERVATIONS_SET:
      return {
        ...state,
        reservedClasses: action.payload,
      };
    case CLASS_ADDED:
      return {
        ...state,
        classes: [...state.classes, action.payload.createdClass],
      };
    case CLASS_EDITED:
      return {
        ...state,
        classes: state.classes.map((c) => {
          return c.class_id === action.payload.updatedClass.class_id
            ? action.payload.updatedClass
            : c;
        }),
      };
    case CLASS_JOINED:
      return {
        ...state,
        classes: state.classes.map((c) => {
          return c.class_id === action.payload.updatedClass.class_id
            ? action.payload.updatedClass
            : c;
        }),
      };
    case CLASS_DELETED:
      return {
        ...state,
        classes: state.classes.filter((c) => c.class_id !== action.payload),
      };
    default:
      return state;
  }
};

// export default classReducer;
