import { Box, Typography } from '@mui/material';
import React, { Component } from 'react';
import StartButton from '../StartButton/StartButton';

export default class TitleBlock extends Component {
  render() {
    return (
      <Box>
        <Typography
          sx={{
            fontSize: '55px',
            textAlign: 'center',
            paddingTop: '130px',
            lineHeight: '63px',
            fontWeight: 600,
            marginBottom: '16px',
          }}
        >
          Run! Make! Take! <br /> Organize your shitty life, finally.
        </Typography>
        <Typography sx={{ fontSize: '20px', marginBottom: '24px', textAlign: 'center' }}>
          Become focused, organized, and calm with RMT! <br /> One more task manager and to-do list app.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <StartButton width='200px' fontSize='20px' />
        </Box>
      </Box>
    );
  }
}