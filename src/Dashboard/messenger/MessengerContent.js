import React, {useEffect} from 'react';
import { styled } from '@mui/system';
import Messages from './messages/Messages';
import NewMessageInput from './messages/NewMessageInput';


const Wrapper = styled("div")({
    flexGrow: 1,

})

const MessengerContent = ({chosenChatDetails}) => {

    useEffect(() => {
        //fetching chat hostory
    },[])


  return (
    <Wrapper>
        <Messages/>
        <NewMessageInput />
    </Wrapper>
  ) 
}

export default MessengerContent