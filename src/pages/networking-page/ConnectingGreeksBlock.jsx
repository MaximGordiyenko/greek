import { Grid, Box, Typography } from '@mui/material';
import { BackgroundGrid } from '../home-page/ui.styles.js';
import Connecting_Hero from '../../assets/Connecting_Hero.webp';
import hey_greek_logo from '../../assets/heygreek.svg';

export const ConnectingGreeksBlock = () => {
  return (
    <BackgroundGrid container img={Connecting_Hero} height={400}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ mt: { xs: 16, lg: 8 }, mx: { sm: 20, md: 30, lg: 70 } }}>
        <Box component="img" src={hey_greek_logo} alt="Hey_greek_white" py={3}/>
        <Typography variant="h2" color="#fafafa">Connecting greeks</Typography>
      </Grid>
    </BackgroundGrid>
  );
};
