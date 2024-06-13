import { Grid, Box, Typography } from '@mui/material';
import { BackgroundGrid } from '../home-page/ui.styles.js';
import Dating_Hero from '../../assets/Dating_Hero.webp';
import hey_greek_logo from '../../assets/heygreek.svg';

export const DatingAppBlock = () => {
  return (
    <BackgroundGrid container img={Dating_Hero} height={400}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 20, sm: 10, md: 10, lg: 10 }, px: { xs: 10, sm: 25, md: 40, lg: 70 } }}>
        <Box component="img" src={hey_greek_logo} mb={4} alt="Hey_greek_white"/>
        <Typography variant="h2" color="#fafafa" sx={{ fontSize: { xs: 40, sm: 45, md: 55, lg: 60 } }}>
          Dating app for greeks
        </Typography>
      </Grid>
    </BackgroundGrid>
  );
};
