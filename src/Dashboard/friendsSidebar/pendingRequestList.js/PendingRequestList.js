import React from 'react';
import {styled} from '@mui/system';
import PendingInvitationListItem from './PendingInvitationListItem';
import { connect } from 'react-redux';


const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
});

// const DummyInvitations = [
//   {
//     id: '1',
//     senderId: {
//       username: 'Jonny',
//       mail: 'jonny@gmail.com'
//     }
//   },
//   {
//     id: '2',
//     senderId: {
//       username: 'Mark',
//       mail: 'mark@gmail.com'
//     }
//   },
// ]

const PendingRequestList = ({pendingFriendsInvitations}) => {
  console.log("pendingFriendsInvitations:", pendingFriendsInvitations)
  return (
    <MainContainer>
      {pendingFriendsInvitations.map(i=>(
        <PendingInvitationListItem key={i._id} id={i._id} username={i.senderId.username} mail={i.senderId.mail} />
      ))}
    </MainContainer>
  )
}

const mapStoreToStateProps = ({friends}) => {
  return {...friends}
}

export default connect(mapStoreToStateProps, null)(PendingRequestList);