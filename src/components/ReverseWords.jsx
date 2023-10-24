import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

// single for loop alay
function StringAnalyzer() {
  const [inputString, setInputString] = useState("");
  const [reversedSentence, setReversedSentence] = useState("");

  function reverseWords(s) {
    const reversedWords = [];

    inputString.split(" ").map((word) => reversedWords.unshift(word));

    setReversedSentence(reversedWords.join(" "));
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
      <Button
        sx={{ margin: "0 10px" }}
        variant="contained"
        color="primary"
        onClick={() => reverseWords(false)}
      >
        Reverse Words
      </Button>
      <Paper style={{ padding: "20px", margin: "20px" }}>
        <Typography variant="h6">Reversed sentence:</Typography>
        <Typography variant="body1">{reversedSentence}</Typography>
      </Paper>
    </div>
  );
}

export default StringAnalyzer;
