import { Typography, TextField, Button, Paper } from '@mui/material';
import React, { useState } from 'react';

function ReverseCharsInString() {
  const [inputString, setInputString] = useState('');
  const [reverseCharsString, setReversedCharsString] = useState('');
  const [isPalindrome, setIsPalindrome] = useState('');

  function reverseAndCheckPalindrome() {
    const reversedChars = inputString.split('').reverse().join('');
    setReversedCharsString(reversedChars);

    const isPlaindrome = inputString === reversedChars;
    setIsPalindrome(isPlaindrome ? 'String is Palindrome' : 'String is not Palindrome');
  }

  return (
    <div>
      <Typography variant="h6">Reverse the characters in a string</Typography>
      <TextField
        label="Enter a sentence"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button sx={{ margin: '0 10px' }} variant="contained" color="primary" onClick={() => reverseAndCheckPalindrome()}>
        Reverse Characters
      </Button>
      <Paper style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="body1">String with reversed characters:</Typography>
        <Typography variant="body1">{reverseCharsString}</Typography>
        <Typography variant="body1">{isPalindrome}</Typography>
      </Paper>
    </div>
  );
}
export default ReverseCharsInString;
