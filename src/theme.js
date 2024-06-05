import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#FAFAFA'
    // },
    // secondary: {
    //   main: '#03237A'
    // },
    // error: {
    //   main: red.A400
    // }
  },
  typography: {
    fontFamily: 'Rany',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Winner',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Winner',
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'Winner',
      fontWeight: 800,
    },
    h4: {
      fontFamily: 'Winner',
      fontWeight: 800,
    },
    h5: {
      fontFamily: 'Winner',
      fontWeight: 800,
    },
  }
});
