import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const friendsActions = {
    SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATION: 'FRIENDS.SET_PENDING_FRIENDS_INVITATION',
    SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS'
};

export const getActions = (dispatch) => {
    return {
        sendFriendInvitation: (data, closeDialogHandler) => dispatch(sendFriendInvitation(data, closeDialogHandler)),
        acceptFriendRequest: (data) => dispatch(acceptFriendRequest(data)),
        rejectFriendRequest: (data) => dispatch(rejectFriendRequest(data))
    }
}

export const setPendingFriendsInvitatiions = (pendingFriendsInvitations) => {
    return {
        type: friendsActions.SET_PENDING_FRIENDS_INVITATION,
        pendingFriendsInvitations
    }
}

export const setFriends = (friends) => {
    return {
        type: friendsActions.SET_FRIENDS,
        friends
    }
}

export const setOnlineUsers = (onlineUsers) => {
    return {
        type:friendsActions.SET_ONLINE_USERS,
        onlineUsers
    }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
    return async (dispatch) =>{
        const response = await api.sendFriendInvitation(data);

        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else{
            dispatch(openAlertMessage('Invitation has been sent.'));
            closeDialogHandler()
        }
    }
}

const acceptFriendRequest = (data) =>{
    return async(dispatch) => {
        const response = await api.acceptFriendRequest(data);
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else{
            dispatch(openAlertMessage('Invitation accepted.'));
        }
    }
}

const rejectFriendRequest = (data) => {
    return async(dispatch) => {
        const response = await api.rejectFriendRequest(data);
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else{
            dispatch(openAlertMessage('Invitation accepted.'));
        }
    }
}