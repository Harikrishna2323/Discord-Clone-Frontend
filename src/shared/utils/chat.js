import store from "../../store/store";
import { setMessages } from "../../store/actions/chatActions";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;
  console.log("dataInupdateDirectChatHistoryIfActive : ", data);

  //find id of used from token and from active conversation

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails?.user._id;

  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive(
      participants,
      usersInConversation,
      messages
    );
  }
};

const updateChatHistoryIfSameConversationActive = (
  participants,
  usersInConversation,
  messages
) => {
  const result = participants.every(function (participantId) {
    return usersInConversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
