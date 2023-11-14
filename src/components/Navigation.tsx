import React from 'react';
import { AppBar, Typography, Toolbar, Container, Button, useMediaQuery } from '@mui/material';
import Clock from './Clock';

const Navigation: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Clock />
            <Button color="inherit" href="/">
              Volar
            </Button>
          </Typography>

          {isMobile ? (
            // Render a mobile-friendly menu for smaller screens
            // You can customize this part as per your design
            <Button color="inherit" href="/menu">
              Menu
            </Button>
          ) : (
            // Render individual buttons for larger screens
            <>
              <Button color="inherit" href="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" href="/profile">
                Profile
              </Button>
              <Button color="inherit" href="/todo">
                Todo
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
              <Button color="inherit" href="/examples">
                Examples
              </Button>
              <Button color="inherit" href="/consecutive-char">
                Strings
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
