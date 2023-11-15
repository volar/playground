import React from 'react';
import { Typography, Container, Stack } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StringAnalyzer from '../components/StringAnalyzer';
import SubStringFromString from '../components/SubStringFromString';
import ReverseWordsInSentence from '../components/ReverseWords';
import ReverseCharsInString from '../components/ReverseCharsInString';

const StringTools = () => {
  return (
    <Container>
      <Header />
      <Typography variant="h5" align="center" style={{ margin: '20px 0' }}>
        Various String Analyzers for fun and giggles
      </Typography>
      <Stack spacing={2}>
        <StringAnalyzer />
        <SubStringFromString />
        <ReverseWordsInSentence />
        <ReverseCharsInString />
      </Stack>
      <Footer />
    </Container>
  );
};

export default StringTools;
