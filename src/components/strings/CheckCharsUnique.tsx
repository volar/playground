import { Typography, TextField, Button, Paper } from '@mui/material';
import React, { useState } from 'react';

function CheckCharsUnique() {
  const [inputString, setInputString] = useState('');
  const [areCharsUnique, setAreCharsUnique] = useState('');

  function areAllCharactersUnique(str: string) {
    const charSet: Set<string> = new Set();

    for (const char of str) {
      // If the character is already in the set, the string has duplicate characters
      if (charSet.has(char)) {
        return false;
      }

      // Add the character to the set
      charSet.add(char);
    }

    // All characters are unique
    return true;
  }

  function handleButtonClick() {
    if (areAllCharactersUnique(inputString)) {
      setAreCharsUnique('Characters are Unique');
    } else {
      setAreCharsUnique('Characters are not Unique');
    }
  }

  return (
    <div>
      <Typography variant="h6">Check If characters in a string are unique</Typography>
      <TextField
        label="Enter a sentence"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button sx={{ margin: '0 10px' }} variant="contained" color="primary" onClick={() => handleButtonClick()}>
        Check if Characters are Unique
      </Button>
      <Paper style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="body1">{areCharsUnique}</Typography>
      </Paper>
    </div>
  );
}
export default CheckCharsUnique;
