import { Box } from '@mui/material';
import React, { Component } from 'react';
import listerLogo from '../assets/listerLogo.png';

export default class Logo extends Component {
  render() {
    return (
      <Box sx={{ cursor: 'pointer', ':hover': { opacity: '0.85' } }}>
        <img height={85} width={160} src={listerLogo} alt='logo' />
      </Box>
    );
  }
}
