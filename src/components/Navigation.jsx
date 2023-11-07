import React from 'react';
import { AppBar, Typography, Toolbar, Container, Button } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Button color="inherit" href="/">
              Volar
            </Button>
          </Typography>
          <Button color="inherit" href="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" href="/profile">
            Profile
          </Button>
          <Button color="inherit" href="/cards">
            Cards
          </Button>
          <Button color="inherit" href="/redux-example">
            Redux
          </Button>
          <Button color="inherit" href="/scientist-list">
            Scientist
          </Button>
          <Button color="inherit" href="/product-table">
            Product Table
          </Button>
          <Button color="inherit" href="/consecutive-char">
            Strings
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
