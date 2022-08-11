import React from 'react';
import {  styled } from '@mui/system';
import Dropdown from './Dropdown';
import ChosenOptionLabel from './ChosenOptionLabel';

const MainContainer = styled('div')({
    position: 'absolute',
    right: '0',
    top: '0',
    width: 'calc(100% - 326px)',
    height: '48px',
    borderBottom: '2px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#36393f',
    padding: '0 15px'
})

const AppBar = () => {
  return (
    <MainContainer>
      <ChosenOptionLabel />
      <Dropdown />
    </MainContainer>
  )
}

export default AppBar;