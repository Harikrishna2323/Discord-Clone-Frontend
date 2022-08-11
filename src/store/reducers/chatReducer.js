import { chatActions } from "../actions/chatActions";

const initial_state = {
    chosenChatDetails: null,
    chatType: null,
    messages: []
}

const reducer = (state = initial_state, action) =>{
    switch(action.type){
        case chatActions.SET_CHOSEN_CHAT:
            return{
                ...state,
                chosenChatDetails: action.chatDetails,
                chatType: action.chatType,
                messages: []
            }
        case chatActions.SET_MESSAGES:
            return{
                ...state,
                messages: action.messages
            }
        
        default:
            return state;
    }
}

export default reducer;