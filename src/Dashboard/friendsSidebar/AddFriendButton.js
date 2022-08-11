import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import { styled } from '@mui/system';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
    width: '80%',
    height: '30px',
    marginTop: '10px',
    marginLeft: '5px',
    backgroundColor: '#3ba55d'
}


const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);


    const handleOpenAddFriend = () =>{
      setIsDialogOpen(true);
    }

    const handleCloseAddFriend = () => {
      setIsDialogOpen(false);
    }
  return (
    <>
    <CustomPrimaryButton additionalStyles={additionalStyles} label='Add friend' onClick={handleOpenAddFriend}></CustomPrimaryButton>
        
    
    <AddFriendDialog isDialogOpen={isDialogOpen} closeDialogHandler={handleCloseAddFriend} />
    </>
  )
}

export default AddFriendButton;