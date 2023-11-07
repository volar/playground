import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FormControl, Select, MenuItem } from '@mui/material';

function CurrencyInput(props) {
  return (
    <div>
      <TextField type="text" value={props.amount} onChange={(ev) => props.onAmountChange(ev.target.value)} />
      <FormControl>
        <Select value={props.currency} onChange={(ev) => props.onCurrencyChange(ev.target.value)}>
          {props.currencies.map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
