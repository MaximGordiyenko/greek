import { Box, Typography, Grid } from '@mui/material';
import { BackgroundGrid } from './ui.styles.js';

import { HeyGreekIconButton } from '../../components/buttons/HeyGreekIconButton.jsx';

import Hero_BG from '../../assets/Hero_BG.webp';
import Hey_greek_white from '../../assets/Hey_greek_white.webp';
import Apple_logo from '../../assets/Apple_logo.webp';
import PlayMarketLogo from '../../assets/PlayMarketLogo.webp';

export const LifeStyleAppBlock = () => {
  return (
    <BackgroundGrid container img={Hero_BG} height>
      <Grid item xs={11} sm={8} md={10} lg={6} textAlign="center" mx="auto"
            sx={{ mt: { xs: 32, sm: 40, md: 60, lg: 70 } }}>
        
        <Box component="img" src={Hey_greek_white} alt="Hey_greek_white" py={4} sx={{ width: { sm: 200, lg: 300 } }}/>
        <Typography variant="h1" color="#fafafa" sx={{ fontSize: { xs: 50, sm: 50, md: 70, lg: 80 } }}>
          Ultimate Greek Lifestyle App
        </Typography>
        <Typography color="#fafafa" sx={{ fontSize: { xs: 18, sm: 18, md: 25, lg: 25 } }}>
          Worlds First Dating App Made For The Greeks By Greeks!
        </Typography>
        
        <Grid item container xs={12} sm={10} md={8} lg={9} py={3}
              mx="auto" display="flex" justifyContent="space-evenly">
          
          <Grid item xs={5.5} sm={5} md={4} lg={4.5}>
            <HeyGreekIconButton link="https://apple.com" caption="Download on the" icon={Apple_logo}>
              App Store
            </HeyGreekIconButton>
          </Grid>
          
          <Grid item xs={5.5} sm={5} md={4} lg={4.5}>
            <HeyGreekIconButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>
              Google Play
            </HeyGreekIconButton>
          </Grid>
        
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
