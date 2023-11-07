import React from 'react';
import { Typography, Container, Stack } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StringAnalyzer from '../components/StringAnalyzer';
import SubStringFromString from '../components/SubStringFromString';
import ReverseWord from '../components/ReverseWords';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h5" align="center" style={{ margin: '20px 0' }}>
          Various String Analyzers for fun and giggles
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body1" paragraph>
            <StringAnalyzer />
          </Typography>
          <Typography variant="body1" paragraph>
            <SubStringFromString />
          </Typography>
          <Typography variant="body1" paragraph>
            <ReverseWord />
          </Typography>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
