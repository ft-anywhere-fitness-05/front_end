import { STASH_USER_DATA } from '../actions/userInformationActions'

export const initialState = {
  id: '',
  userType: ''
};

export const userInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case STASH_USER_DATA:
      return {
        ...state,
        userType: action.payload.role_name,
        id: action.payload.user_id
      };
    default:
      return state;
  }
};