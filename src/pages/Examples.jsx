import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import Navigation from '../components/Navigation';
import ProductTableExample from '../examples/ProductTableExample';
import Counter from '../examples/Counter';
import Accordion from '../examples/Acordition';
import TrafficLight from '../examples/TrafficLight';

const Home = () => {
  return (
    <Container>
      <Navigation />
      <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
        Examples from various sources
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3} sx={{ padding: '10px', margin: '5px' }}>
            <ProductTableExample />
          </Paper>
          <Paper elevation={3} sx={{ padding: '10px', margin: '5px' }}>
            <TrafficLight />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3} sx={{ padding: '10px', margin: '5px' }}>
            <Counter />
          </Paper>
          <Paper elevation={3} sx={{ padding: '10px', margin: '5px' }}>
            <Accordion />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
