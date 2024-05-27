import { Box, Typography, Grid } from '@mui/material';
import { BackgroundGrid } from './ui.styles.js';

import { HeyGreekButton } from '../../components/buttons/HeyGreekButton.jsx';

import Hero_BG from '../../assets/Hero_BG.webp';
import Hey_greek_white from '../../assets/Hey_greek_white.webp';
import Apple_logo from '../../assets/Apple_logo.webp';
import PlayMarketLogo from '../../assets/PlayMarketLogo.webp';

export const LifeStyleAppBlock = () => {
  return (
    <BackgroundGrid container img={Hero_BG} height>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" sx={{ mt: { xs: 36, lg: 70 } }}>
        <Box component="img" src={Hey_greek_white} alt="Hey_greek_white"/>
        <Typography variant="h2" color="#fafafa">Ultimate Greek Lifestyle App</Typography>
        <Typography fontSize={18}>Worlds First Dating App Made For The Greeks By Greeks!</Typography>
        <HeyGreekButton link="https://apple.com" caption="Download on the" icon={Apple_logo}>App Store</HeyGreekButton>
        <HeyGreekButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>Google Play</HeyGreekButton>
      </Grid>
    </BackgroundGrid>
  );
};
