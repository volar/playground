import React from 'react';
import { Container, Typography } from '@mui/material';
import Navigation from '../components/Navigation';

function ReduxExample() {
  return (
    <Container>
      <Navigation />
      <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
        sample redux app
      </Typography>
    </Container>
  );
}

export default ReduxExample;
