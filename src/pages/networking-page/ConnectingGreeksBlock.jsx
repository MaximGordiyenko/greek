import { Grid, Box, Typography } from '@mui/material';
import { BackgroundGrid } from '../Home-page/ui.styles.js';
import Connecting_Hero from '../../assets/Connecting_Hero.webp';
import Hey_greek_white from '../../assets/Hey_greek_white.webp';

export const ConnectingGreeksBlock = () => {
  return (
    <BackgroundGrid container img={Connecting_Hero} height={400}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" sx={{ mt: { xs: 16, lg: 18 } }}>
        <Box component="img" src={Hey_greek_white} alt="Hey_greek_white"/>
        <Typography variant="h2" color="#fafafa">Dating app for greeks</Typography>
      </Grid>
    </BackgroundGrid>
  );
};
