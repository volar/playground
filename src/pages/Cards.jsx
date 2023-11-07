import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import axios from "axios";
import Navigation from "../components/Navigation";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this with your API endpoint
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      <Navigation />
      <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
        Sample Dashboard
      </Typography>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.body}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cards;
