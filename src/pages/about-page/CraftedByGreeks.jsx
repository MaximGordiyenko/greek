import { BackgroundGrid, Wrapper } from '../home-page/ui.styles.js';
import { Typography, Grid } from '@mui/material';
import btm_img_2 from '../../assets/btm_img-2.webp';
import { HeyGreekIconButton } from '../../components/buttons/HeyGreekIconButton.jsx';
import Apple_logo from '../../assets/Apple_logo.webp';
import PlayMarketLogo from '../../assets/PlayMarketLogo.webp';

export const CraftedByGreeks = () => {
  return (
    <BackgroundGrid container height={700} img={btm_img_2}>
      <Grid item container p={2} border={1} borderColor="primary" borderRadius={3}
            xs={11} sm={12} md={6} lg={4}
            sx={{
              background: '#fafafa',
              height: { xs: 480, lg: 320 },
              mt: { xs: 24, lg: 40 },
              mx: { xs: 'auto', lg: 10 }
            }}>
        <Grid item xs={12} sm={12} md={6} lg={12}>
          <Typography variant="h2" textAlign="center">crafted by Greeks, for Greeks</Typography>
        </Grid>
        <Grid item container xs={12} sm={12} md={12} lg={12} mx="auto" display="flex" justifyContent="space-around">
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <HeyGreekIconButton link="https://apple.com" caption="Download on the" icon={Apple_logo}>
              App Store
            </HeyGreekIconButton>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <HeyGreekIconButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>
              Google Play
            </HeyGreekIconButton>
          </Grid>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
