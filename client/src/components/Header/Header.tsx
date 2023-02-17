import React, { Component } from 'react';
import { Box, Button } from '@mui/material';
import listerLogo from './listerLogo.png';
import StartButton from '../StartButton/StartButton';

class Header extends Component {
  render() {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
        <Box sx={{ cursor: 'pointer' }}>
          <img height={85} width={160} src={listerLogo} alt='logo' />
        </Box>
        <Box>
          <Button
            sx={{
              textTransform: 'none',
              color: '#232115',
              fontSize: '16px',
              borderRadius: '10px',
              paddingX: '15px',
              marginRight: '20px',
              ':hover': { backgroundColor: 'hsla(53,10%,69%,.15)' },
            }}
          >
            Log in
          </Button>
          <StartButton width='140px' fontSize='16px' />
        </Box>
      </Box>
    );
  }
}

export default Header;
