import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
        Welcome to my website!
      </Typography>
      <Typography variant="body1" paragraph>
        This is the main content of my personal website. You can add your
        content here.
      </Typography>
    </Container>
  );
};

export default Home;
