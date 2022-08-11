import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import Avatar from '../../../shared/components/Avatar';
import InvitationDecisionButton from './InvitationDecisionButton';
import {connect} from 'react-redux';
import { getActions } from '../../../store/actions/friendsActions';

const PendingInvitationListItem = ({id, username, mail,
    acceptFriendRequest = () =>{},
    rejectFriendRequest = () =>{}}) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleAcceptInvitation = () =>{
        console.log(id)
        acceptFriendRequest({id});
        setButtonDisabled(true);
    }

    const handleRejectInvitation = () =>{
        console.log(id)
        rejectFriendRequest({id});
        setButtonDisabled(true);
    }
  return (
     
    <Tooltip title={mail}>
        <div style={{width: '100%'}}>
            <Box sx={{
                width: '100%',
                height: '42px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
                
            }}>
                <Avatar username={username} />
                <Typography sx={{
                    marginLeft: '7px',
                    fontWeight: '700',
                    color: '#8e9297',
                    flexGrow: 1,
                    
                }} variant="suntitle1">
                    {username}
                </Typography>
                <InvitationDecisionButton disabled={buttonDisabled} acceptInvitationHandler={handleAcceptInvitation} rejectInvitationHandler={handleRejectInvitation} />
            </Box>
            
        </div>
    </Tooltip>
  )
}

const mapActionsToProps = (dispatch) => {
    return{
      ...getActions(dispatch)
    }
  }

export default connect(null, mapActionsToProps)(PendingInvitationListItem);