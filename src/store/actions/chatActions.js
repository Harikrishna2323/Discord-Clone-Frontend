export const chatTypes = {
    DIRECT:"DIRECT",
    GROUP: "GROUP"
};

export const chatActions = {
    SET_CHOSEN_CHAT: "CHAT.SET_CHOSEN_CHAT",
    SET_MESSAGES: "CHAT.SET_MESSAGES",
    SET_CHAT_TYPE:"CHAT.SET_CHAT_TYPE"
}

export const getActions = (dispatch) =>{
    return {
        setChosenChatDetails: (details, chatType) => dispatch(setChosenChatDetails(details, chatType))
    }
} 

const setChosenChatDetails = (chatDetails, type) =>{
    return {
        type: chatActions.SET_CHOSEN_CHAT,
        chatType: type,
        chatDetails
    }
}

export const setMessages = (messages) =>{
    return{
        type:chatActions.SET_MESSAGES,
        messages
    }
}