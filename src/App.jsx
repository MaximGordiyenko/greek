import './App.css';
import { Header } from './components/Header/Header.jsx';
import { Grid } from '@mui/material';

export const App = () => {
  
  return (
    <>
      <Header/>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
        </Grid>
      </Grid>
    </>
  );
};
