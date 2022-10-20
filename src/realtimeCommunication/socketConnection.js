import io from "socket.io-client";
import {
  setPendingFriendsInvitatiions,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions";
import store from "../store/store";
import { updateDirectChatHistoryIfActive } from "../shared/utils/chat";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io("http://localhost:4500", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("Successfully connected with socket.io server.");
    console.log(socket.id);
  });

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitatiions(pendingInvitations));
  });

  socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    console.log("direct-chat-history came from server : ", data);
    updateDirectChatHistoryIfActive(data);
  });
};

export const sendDirectMessage = (data) => {
  console.log("data:", data);
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  console.log("direct-chat-history in socketaamcoimv : ", data);
  socket.emit("direct-chat-history", data);
};
