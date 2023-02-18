import { Box } from '@mui/material';
import React, { Component } from 'react';
import Logo from '../components/Logo';
import AuthForm from '../components/AuthForm/AuthForm';


export default class Auth extends Component {
  render() {
    return (
      <Box sx={{ width: '940px', marginX: 'auto' }}>
        <Box sx={{ marginBottom: '100px' }}>
          <Logo />
        </Box>
        <AuthForm />
      </Box>
    );
  }
}
