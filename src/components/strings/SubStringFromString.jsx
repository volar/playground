import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

// single for loop alay
function StringChecker() {
  const [inputString, setInputString] = useState('');
  const [subString, setSubString] = useState('');
  const [stringResult, setStringResult] = useState(true);

  // single for loop to check for consecutive characters
  const analyzeString = () => {
    // check for the input of the string
    if (!inputString || !subString) {
      return setStringResult(false);
    }

    // count all the characters in the string
    const charCount = new Map();

    for (const char of inputString) {
      if (charCount.has(char)) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
      } else {
        charCount.set(char, 1);
      }
    }

    // Check if there are enough characters in the Input String  to construct the subString
    // loop over all the characters of substring
    for (const char of subString) {
      // the first one checks if the set has our character and the second one if the count is not equal to
      if (!charCount.has(char) || charCount.get(char) === 0) {
        return setStringResult(false);
      }
      // remove a char from the map
      charCount.set(char, charCount.get(char) - 1);
    }

    return setStringResult(true);
  };

  return (
    <div>
      <Typography variant="h6">Can We create Substring From String</Typography>
      <TextField
        label="Enter a string 1"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Enter a string 2 (SubString)"
        value={subString}
        onChange={(e) => setSubString(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button sx={{ margin: '0 10px' }} variant="contained" color="primary" onClick={() => analyzeString(false)}>
        String Checker
      </Button>
      <Paper style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="p">Analysis Result:</Typography>
        <Typography variant="body1">
          {stringResult ? 'You can create a string' : 'No, you cannot create a string'}
        </Typography>
      </Paper>
    </div>
  );
}

export default StringChecker;
// Compare this snippet from src/components/SubStringFromString.jsx:
