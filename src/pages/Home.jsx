import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <Container>
      <Navigation />
      <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
        Welcome to my website!
      </Typography>
      <Typography variant="body1" paragraph>
        This website is a collection of my projects and experiments. It is built with React and Material UI. I hope you
        enjoy it!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/dashboard">
            Dashboard
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/profile">
            Profile
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/cards">
            Cards
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/redux-example">
            Redux Example
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/recipes-list">
            Recipes List
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/scientist-list">
            Scientist List
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/product-table">
            Product Table
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/consecutive-char">
            Consecutive Char
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/exchange">
            Exchange App
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button color="primary" variant="contained" fullWidth href="/todo">
            Todo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
