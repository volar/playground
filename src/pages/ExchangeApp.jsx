import React from "react";
import { useState, useEffect } from "react";
import CurrencyInput from "../components/CurrencyInput";
import { Grid, Typography, styled, theme } from "@mui/material";
import axios from "axios";

const PageBody = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  background: "rgba(250, 250, 250, 1)",
}));

const ExchangeApp = () => {
  const [currencyFrom, setCurrencyFrom] = useState(["USD"]);
  const [currencyToo, setCurrencyToo] = useState(["CAD"]);
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountToo, setamountToo] = useState(1);
  const [rates, setRates] = useState([]);

  // need to get axios currencies from api

  // useEffect(() => {
  //   axios
  //     .get
  //     //"https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdD3"
  //     ()
  //     .then((response) => {
  //       console.log("set rates", response.data.rates);
  //       setRates(response.data.rates);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!!rates) {
  //     function init() {}
  //     init();
  //   }
  // }, [rates]);

  return (
    <PageBody>
      <Typography variant="h4" component="h1" align="center">
        Currency Converter
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CurrencyInput
            currencies={Object.keys(rates)}
            amount={amountFrom}
            currency={currencyFrom}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CurrencyInput
            currencies={Object.keys(rates)}
            amount={amountToo}
            currency={currencyToo}
          />
        </Grid>
      </Grid>
    </PageBody>
  );
};

export default ExchangeApp;
