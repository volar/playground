import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(66, 96, 211, 1)',
    },
    success: {
      main: '#2AA872',
    },
    incomplete: {
      main: '#4E5664',
      dark: '#000000',
    },
    submitted: {
      main: '#FEF8EA',
      dark: '#DDD8CD',
    },
    approved: {
      main: '#E5F7F0',
      dark: '#C8D6D1',
    },
    rejected: {
      main: '#C32F35',
      dark: '#AB2C31',
    },
    skipped: {
      main: '#EAEAEA',
      dark: '#CDCDCD',
    },
    review: {
      main: '#B2C3FE',
      dark: '#000000',
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeightMedium: 700,
  },
} as ThemeOptions);

export default theme;

declare module '@mui/material/styles' {
  interface Palette {
    incomplete: Palette['primary'];
    submitted: Palette['primary'];
    approved: Palette['primary'];
    rejected: Palette['primary'];
    skipped: Palette['primary'];
    review: Palette['primary'];
  }
  interface PaletteOptions {
    incomplete: PaletteOptions['primary'];
    submitted: PaletteOptions['primary'];
    approved: PaletteOptions['primary'];
    rejected: PaletteOptions['primary'];
    skipped: PaletteOptions['primary'];
    review: PaletteOptions['primary'];
  }
}
