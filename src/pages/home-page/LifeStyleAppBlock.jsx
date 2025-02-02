import { Box, Typography, Grid } from '@mui/material';
import { BackgroundGrid } from './ui.styles.js';

import { HeyGreekIconButton } from '../../components/buttons/HeyGreekIconButton.jsx';

import Hero_BG from '../../assets/Hero_BG.webp';
import hey_greek_logo from '../../assets/heygreek.svg';
import { AppleStoreIcon } from '../../components/icons/AppleStoreIcon.jsx';
import { GooglePlayMarketIcon } from '../../components/icons/GooglePlayMarketIcon.jsx';

export const LifeStyleAppBlock = () => {
  return (
    <BackgroundGrid container img={Hero_BG} height={800}>
      <Grid item xs={11} sm={8} md={10} lg={6} textAlign="center" mx="auto"
            sx={{ mt: { xs: 40, sm: 50, md: 45, lg: 40 } }}>
        
        <Box component="img" src={hey_greek_logo} alt="Hey_greek_white" py={4} sx={{ width: { sm: 200, lg: 250 } }}/>
        <Typography variant="h1" color="#fafafa" sx={{ fontSize: { xs: 50, sm: 50, md: 70, lg: 80 } }}>
          Ultimate Greek Lifestyle App
        </Typography>
        <Typography color="#fafafa" sx={{ fontSize: { xs: 18, sm: 18, md: 25, lg: 25 } }}>
          Worlds First Dating App Made For The Greeks By Greeks!
        </Typography>
        
        <Grid item container xs={12} sm={10} md={8} lg={9} py={3}
              mx="auto" display="flex" justifyContent="space-evenly">
          
          <Grid item xs={5.5} sm={5} md={4} lg={4}>
            <HeyGreekIconButton
              link="https://apple.com" caption="Download on the"
              icon={<AppleStoreIcon color="#03237A"/>}>
              App Store
            </HeyGreekIconButton>
          </Grid>
          
          <Grid item xs={5.5} sm={5} md={4} lg={4}>
            <HeyGreekIconButton
              link="https://google.com" caption="Get it on"
              icon={<GooglePlayMarketIcon color="#03237A"/>}>
              Google Play
            </HeyGreekIconButton>
          </Grid>
        
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
