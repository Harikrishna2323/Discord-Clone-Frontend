import { authActions } from "../actions/authActions";

const initial_State = {
  userDetails: null,
};

const reducer = (state = initial_State, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
