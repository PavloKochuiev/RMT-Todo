import { Button } from '@mui/material';
import React, { Component } from 'react';

type Props = {
  fontSize: string;
  width: string;
};

export default class StartButton extends Component<Props> {
  render() {
    const { fontSize, width } = this.props;

    return (
      <Button
        sx={{
          fontSize,
          width,
          textTransform: 'none',
          color: '#232115',
          borderRadius: '10px',
          paddingX: '15px',
          backgroundColor: '#FFD600',
          ':hover': { backgroundColor: '#EDC700' },
        }}
      >
        Start for free
      </Button>
    );
  }
}
