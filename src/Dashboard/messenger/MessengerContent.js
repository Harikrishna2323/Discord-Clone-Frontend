import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./messages/Messages";
import NewMessageInput from "./messages/NewMessageInput";
import { getDirectChatHistory } from "../../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  console.log("chosenChatDetails : ", chosenChatDetails);
  useEffect(() => {
    getDirectChatHistory({ receiverUserId: chosenChatDetails.id });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
