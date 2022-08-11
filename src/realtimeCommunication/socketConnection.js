import io from 'socket.io-client';
import { setPendingFriendsInvitatiions, setFriends, setOnlineUsers } from '../store/actions/friendsActions';
import store from '../store/store';

let socket = null;

export const connectWithSocketServer = (userDetails) =>{
    const jwtToken = userDetails.token;
    socket = io("http://localhost:4500",{
        auth:{
            token: jwtToken,
        }
    });

    socket.on('connect', ()=>{
        console.log("Successfully connected with socket.io server.");
        console.log(socket.id)
    })

    socket.on('friends-invitations', (data) => {
        const {pendingInvitations} = data;
        store.dispatch(setPendingFriendsInvitatiions(pendingInvitations))
    })

    socket.on("friends-list", (data) => {
        const {friends} = data;
        store.dispatch(setFriends(friends))
    })

    socket.on("online-users", (data) => {
        console.log("Online users update came");
        console.log("online Users:", data)
        const {onlineUsers} = data;
        store.dispatch(setOnlineUsers(onlineUsers))
    })


}

export const sendDirectMessage = (data) =>{
    console.log("data:", data)
    socket.emit("direct-message", data);
   
}