import React, { useState } from 'react';
import { Typography, TextField, Button, Paper } from '@mui/material';

function ReverseWordsInSentence() {
  const [inputString, setInputString] = useState<string>('');
  const [reversedSentence, setReversedSentence] = useState<string>('');

  function reverseWords() {
    const reversedWords: string[] = [];

    inputString.split(' ').forEach((word) => reversedWords.unshift(word));

    setReversedSentence(reversedWords.join(' '));
  }

  return (
    <div>
      <Typography variant="h6">Reverse The words in the sentence</Typography>
      <TextField
        label="Enter a sentence"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button sx={{ margin: '0 10px' }} variant="contained" color="primary" onClick={() => reverseWords()}>
        Reverse Words
      </Button>
      <Paper style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="body1">Reversed sentence:</Typography>
        <Typography variant="body1">{reversedSentence}</Typography>
      </Paper>
    </div>
  );
}

export default ReverseWordsInSentence;
