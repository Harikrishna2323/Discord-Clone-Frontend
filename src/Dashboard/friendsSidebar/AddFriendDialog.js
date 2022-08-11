// import { Dialog, DialogTitle, Typography } from '@mui/material';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import InputWithLabel from '../../shared/components/InputWithLabel';
import {validateMail} from '../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const additionalStyles = {
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '10px'
}

const AddFriendDialog = ({isDialogOpen, closeDialogHandler, sendFriendInvitation}) => {
    const [mail, setMail] = useState("");
    const [isFormValid, setIsFromValid] = useState('');
    

    const handleSendInvitation = () =>{
        //send friend request to server
        sendFriendInvitation({
            targetMailAddress: mail
        }, handleCloseDialog()
        )}

    const handleCloseDialog = () =>{
        closeDialogHandler();
        setMail('');
    }

    useEffect(()=>{
        setIsFromValid(validateMail(mail))
        console.log(isFormValid)
    },[mail, isFormValid])

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
            <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                <Typography>Enter email address of friend you want to invite.</Typography>
            </DialogContentText>
            
            <DialogContentText>
                <InputWithLabel label='Mail' value={mail} setValue={setMail} type='text' placeholder='Enter mail address' />
            </DialogContentText>
            
        </DialogContent>
        <DialogActions>
            <CustomPrimaryButton onClick={handleSendInvitation}
               
                label='Send'
                additionalStyles={additionalStyles} />
        </DialogActions>
    </Dialog>
  )
}

const mapActionsToProps = (dispatch) => {
    return{
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialog);