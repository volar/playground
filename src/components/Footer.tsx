import React from 'react';
import { Paper, Typography } from '@mui/material';

function Footer() {
  return (
    <Paper square elevation={3} style={{ padding: '13px', textAlign: 'center' }}>
      <Typography variant="body2">© {new Date().getFullYear()} True Grit</Typography>
    </Paper>
  );
}

export default Footer;
