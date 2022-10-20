import React from "react";
import { styled } from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import { connect } from "react-redux";
import Message from "./Message";
import DateSeperator from "./DateSeperator";

const MainContainer = styled("div")({
  height: "calc(100% - 60px",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const convertDateToHumanRedable = (date, format = "dd/mm/yy") => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };
  return format.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched]);
};

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          messages[index].author._id === messages[index - 1].author._id;

        const sameDay =
          index > 0 &&
          convertDateToHumanRedable(new Date(message.date), "dd/mm/yy") ===
            convertDateToHumanRedable(
              new Date(messages[index - 1].date),
              "dd/mm/yy"
            );

        console.log("contentInParent : ", message);
        return (
          <div key={message._id} style={{ width: "97%" }}>
            {(!sameDay || index === 0) && (
              <DateSeperator
                date={convertDateToHumanRedable(
                  new Date(message.date),
                  "dd/mm/yy"
                )}
              />
            )}
            <Message
              username={message.author.username}
              sameAuthor={sameAuthor}
              date={convertDateToHumanRedable(
                new Date(message.date),
                "dd/mm/yy"
              )}
              sameDay={sameDay}
              content={message.content}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(Messages);
