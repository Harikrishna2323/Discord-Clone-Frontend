import { friendsActions } from "../actions/friendsActions";

const initial_state = {
    friends:[],
    onlineUsers: [],
    pendingFriendsInvitations: [],
    
}

const reducer = (state = initial_state, action) =>{
    switch(action.type){
        case friendsActions.SET_PENDING_FRIENDS_INVITATION:
            return{
                ...state,
                pendingFriendsInvitations: action.pendingFriendsInvitations
            };

        case friendsActions.SET_FRIENDS:
            return{
                ...state,
                friends: action.friends
            }
        
        case friendsActions.SET_ONLINE_USERS:
            return{
                ...state,
                onlineUsers: action.onlineUsers
            };

        default:
            return state;
    }
}

export default reducer;