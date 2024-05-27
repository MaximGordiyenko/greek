import Hero_BG from '../../assets/Hero_BG.svg';
import { Grid, Box, Typography } from '@mui/material';
import Hey_greek_white from '../../assets/Hey_greek_white.svg';
import { BackgroundGrid } from '../Home-page/ui.styles.js';

export const DatingAppBlock = () => {
  return (
    <BackgroundGrid container img={Hero_BG} height={400}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" sx={{ mt: { xs: 16, lg: 18 } }}>
        <Box component="img" src={Hey_greek_white} alt="Hey_greek_white"/>
        <Typography variant="h2">Dating app for greeks</Typography>
      </Grid>
    </BackgroundGrid>
  );
};
