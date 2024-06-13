import { BackgroundGrid, Wrapper } from '../home-page/ui.styles.js';
import { Typography, Grid } from '@mui/material';
import btm_img_2 from '../../assets/btm_img-2.webp';
import { HeyGreekIconButton } from '../../components/buttons/HeyGreekIconButton.jsx';
import { AppleStoreIcon } from '../../components/icons/AppleStoreIcon.jsx';
import { GooglePlayMarketIcon } from '../../components/icons/GooglePlayMarketIcon.jsx';

export const CraftedByGreeks = () => {
  return (
    <BackgroundGrid container height={700} img={btm_img_2}>
      <Grid item container p={2} border={1} borderColor="primary" borderRadius={3}
            xs={11} sm={6} md={5} lg={3.6}
            sx={{
              background: '#fafafa',
              mt: { xs: 36, sm: 42, md: 36, lg: 36 },
              mb: 4,
              mx: { xs: 'auto', sm: 8, md: 10, lg: 12 },
              p: { xs: 4, sm: 4, md: 6, lg: 4 }
            }}>
        
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography gutterBottom variant="h2" textAlign="left" sx={{ fontSize: { xs: 52, sm: 54, md: 62, lg: 60 } }}>
            Crafted by Greeks, for Greeks
          </Typography>
        </Grid>
        
        <Grid item container xs={12} sm={12} md={12} lg={12} justifyContent="space-between">
          <Grid item xs={12} sm={5.8} md={5.6} lg={5.7} sx={{ mb: {xs: 2, sm: 0} }}>
            <HeyGreekIconButton link="https://apple.com" caption="Download on the"
                                icon={<AppleStoreIcon color="#03237A"/>}>
              App Store
            </HeyGreekIconButton>
          </Grid>
          <Grid item xs={12} sm={5.8} md={5.6} lg={5.9}>
            <HeyGreekIconButton link="https://google.com" caption="Get it on"
                                icon={<GooglePlayMarketIcon color="#03237A"/>}>
              Google Play
            </HeyGreekIconButton>
          </Grid>
        </Grid>
      
      </Grid>
    </BackgroundGrid>
  );
};
