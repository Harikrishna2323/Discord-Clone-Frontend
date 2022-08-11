import React from 'react';
import { styled } from '@mui/system';
import Avatar from '../../../shared/components/Avatar';
import { Typography } from '@mui/material';

const MainContainer = styled("div")({
    width: '97%',
    display: 'flex',
    marginTop: '10px'
})

const AvatarContainer = styled("div")({
    width: '70px',
})

const MesssageContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column'
})

const MessageContent = styled("div")({
    color: "#DCDDDE"
})

const SameAuthorText = styled("span")({
    marginLeft: "70px"
})

const SameAuthorMessageContent = styled("div")({
    color: "#DCDDDE",
    width: '97%'
})

const Message = ({content, sameAuthor, username, date, sameDay}) => {
    if(sameAuthor && sameDay){
        return (
            <SameAuthorMessageContent>
                <SameAuthorText>{content}</SameAuthorText>
            </SameAuthorMessageContent>
        )
    }
  return (
    <MainContainer>
        <AvatarContainer>
            <Avatar username={username} />
        </AvatarContainer>
        <MesssageContainer>
            <Typography style={{fontSize: '16px', color: 'white'}}>
                {username}{' '}
                <span style={{fontSize: '12px', color: "#72767d"}}>{date}</span>
            </Typography>

            <MessageContent>{content}</MessageContent>
        
        </MesssageContainer>
    </MainContainer>
  )
}

export default Message;