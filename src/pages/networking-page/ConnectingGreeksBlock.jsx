import { Grid, Box, Typography } from '@mui/material';
import { BackgroundGrid } from '../home-page/ui.styles.js';
import Connecting_Hero from '../../assets/Connecting_Hero.webp';
import Hey_greek_white from '../../assets/Hey_greek_white.webp';

export const ConnectingGreeksBlock = () => {
  return (
    <BackgroundGrid container img={Connecting_Hero} height={380}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ mt: 8, mx: { sm: 20, md: 30, lg: 70 } }}>
        <Box component="img" src={Hey_greek_white} alt="Hey_greek_white" py={3}/>
        <Typography variant="h2" color="#fafafa">Connecting greeks</Typography>
      </Grid>
    </BackgroundGrid>
  );
};
