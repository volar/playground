// Layout.jsx
import React from "react";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import Footer from "./Footer";

const Layout = ({ children, history }) => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Personal Website</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ paddingTop: "20px" }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
