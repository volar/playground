import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import menuData from "../data/data"; // Import the menu data from data.js
import Navigation from "../components/Navigation";

function Dashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDrawerOpen = (item) => {
    setSelectedItem(item);
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleOrderClick = () => {
    // Add your order logic here using the selectedItem data
    alert(`Order placed for ${selectedItem.title}`);
    setOpenDrawer(false); // Close the drawer after placing the order
  };

  // const handlePaymentSuccess = () => {
  //   // Handle the successful payment (e.g., show a confirmation message)
  //   alert("Payment successful!");
  // };

  // const paymentRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: "CARD",
  //       parameters: {
  //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  //         allowedCardNetworks: ["MASTERCARD", "VISA"],
  //       },
  //       tokenizationSpecification: {
  //         type: "PAYMENT_GATEWAY",
  //         parameters: {
  //           gateway: "example",
  //         },
  //       },
  //     },
  //   ],
  //   merchantInfo: {
  //     merchantId: "12345678901234567890",
  //     merchantName: "Demo Merchant",
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: "FINAL",
  //     totalPriceLabel: "Total",
  //     totalPrice: "100.00",
  //     currencyCode: "USD",
  //     countryCode: "US",
  //   },
  // };

  return (
    <Container>
      <Navigation />
      <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {menuData.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.desc}</Typography>
                <Typography variant="h6" color="primary">
                  ${item.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDrawerOpen(item)}
                >
                  Order
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
        <List>
          <ListItem>
            <ListItemText primary="Order Summary" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary={`Item: ${selectedItem ? selectedItem.title : ""}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Total Price: $${
                selectedItem ? selectedItem.price : ""
              }`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOrderClick}
            >
              Place Order
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Container>
  );
}

export default Dashboard;
