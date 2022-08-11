import alertActions from "../actions/alertActions";

const initial_State = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const reducer = (state = initial_State, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};

export default reducer;
