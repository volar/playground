import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

function StringAnalyzer() {
  const [inputString, setInputString] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  // single for loop to check for consecutive characters
  const analyzeStringForConsecutiveChars = () => {
    // check for the input of the string
    if (!inputString) {
      return undefined;
    }

    // max characters in the string
    let maxChar = inputString[0];
    let maxCount = 1;

    // Check current characters
    let currentChar = inputString[0];
    let currentCount = 1;

    // go over the string and count the characters that are the same
    /* eslint-disable-next-line */
    for (let i = 1; i < inputString.length; i++) {
      // check if char is the same
      if (inputString[i] === currentChar) {
        // add to the current count when we match
        currentCount++; /* eslint-disable-line */
      } else {
        // move on on the string characters
        currentChar = inputString[i];
        currentCount = 1;
      }

      // lets check for the maxCount
      if (currentCount > maxCount) {
        maxChar = currentChar;
        maxCount = currentCount;
      }
    }

    // return the max of the characters and the characters
    setAnalysisResult({ char: maxChar, count: maxCount });
    return { char: maxChar, count: maxCount };
  };

  const { char, count } = analysisResult;

  return (
    <div>
      <Typography variant="h6">Analyze String for Consecutive Chars</Typography>
      <TextField
        label="Enter a string"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button
        sx={{ margin: '0 10px' }}
        variant="contained"
        color="primary"
        onClick={() => analyzeStringForConsecutiveChars(false)}
      >
        Analyze Iteratively
      </Button>
      <Button
        sx={{ margin: '10px 10px' }}
        variant="contained"
        color="primary"
        onClick={() => analyzeStringForConsecutiveChars(true)}
      >
        Analyze Recursively
      </Button>
      <Paper style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="p">Analysis Result:</Typography>
        <Typography variant="body1">
          {char} : {count}
        </Typography>
      </Paper>
    </div>
  );
}

export default StringAnalyzer;
