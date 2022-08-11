import React, {useEffect, useRef} from 'react';
import { styled } from '@mui/system';
import MessagesHeader from './MessagesHeader';
import {connect} from 'react-redux'
import Message from './Message';

const MainContainer = styled("div")({
    height: 'calc(100% - 60px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})


const Messages = ({chosenChatDetails, messages}) => {
  return (
    <MainContainer>
        <MessagesHeader name={chosenChatDetails?.name} />
        {messages.map((message, index) =>{
            return <Message key={message._id} username={message.author.username} sameAuthor={message.sameAuthor} date={message.date} sameDay={message.sameDay} />
        })}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({chat}) =>{
    return{
        ...chat
    }
}
export default connect(mapStoreStateToProps)(Messages)