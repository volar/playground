import React from "react";
import { Typography, Container } from "@mui/material";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
          Welcome to my website!
        </Typography>
        <Typography variant="body1" paragraph>
          <Profile />
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
