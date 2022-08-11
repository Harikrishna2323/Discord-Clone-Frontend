import React from 'react';
import { borderLeft, styled } from '@mui/system';
import Avatar from '../../../shared/components/Avatar';
import { Typography } from '@mui/material';

const MainContainer = styled("div")({
    width: '98%',
    display: "flex",
    flexDirection: "column",
    marginTop: '10px'
})

const MessagesHeader = ({name = ""}) => {
  return (
    <MainContainer>
        <Avatar large username={name}  />
        <Typography variant='h4' sx={{fontWeignt: "bold", marginLeft: "10px", marginRight: "5px" }}>
            {name}
        </Typography>
        <Typography sx={{color: "#b9bbbe", marginLeft:"10px", marginRight: "5px"}}>This is the begining of your conversation.</Typography>
    </MainContainer>
  )
}

export default MessagesHeader