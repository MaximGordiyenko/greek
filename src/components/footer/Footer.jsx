import { Grid, Typography, Box, Divider } from '@mui/material';
import { GridCSS, LinkCSS } from './ui.styles.js';
import HeyGreekLogoFooter from '../../assets/HeyGreekLogoFooter.webp';
import Facebook_icon from '../../assets/facebook.webp';
import Tik_tok_icon from '../../assets/tiktok.webp';
import Instagram_icon from '../../assets/instagram.webp';
import { HeyGreekIconButton } from '../buttons/HeyGreekIconButton.jsx';
import Apple_logo from '../../assets/Apple_logo.webp';
import PlayMarketLogo from '../../assets/PlayMarketLogo.webp';

export const Footer = () => {
  return (
    <GridCSS container component="footer" justifyContent="space-between" sx={{ px: { xs: 4, lg: 18 }, py: 4 }}>
      
      <Grid item container xs={12} sm={12} md={12} lg={12} justifyContent="space-between">
        <Grid item xs={12} sm={12} md={2} lg={2} sx={{ textAlign: { xs: "center", sm: "center", lg: 'space-between' } }}>
          <Box component="img" src={HeyGreekLogoFooter} alt="HeyGreek"
               sx={{ width: { xs: '50%', sm: '25%', md: '100%', lg: "100%" } }}/>
        </Grid>
        
        <Grid item container xs={12} sm={12} md={8} lg={6} sx={{ justifyContent: { xs: 'space-evenly', lg: 'space-between' } }}>
          <Grid item xs={12} sm={5} md={5} lg={3} container alignItems="center"
                sx={{ justifyContent: { xs: 'space-evenly', lg: 'space-between' } }}>
            <Grid item lg="auto" xs="auto">
              <Box component="img" src={Facebook_icon} alt="Facebook_icon"/>
            </Grid>
            <Grid item lg="auto" xs="auto">
              <Box component="img" src={Tik_tok_icon} alt="Tik_tok_icon"/>
            </Grid>
            <Grid item lg="auto" xs="auto">
              <Box component="img" src={Instagram_icon} alt="Instagram_icon"/>
            </Grid>
          </Grid>
          
          <Grid item container xs={12} sm={8} md={7} lg={8} sx={{ justifyContent: { xs: 'space-evenly', lg: 'space-between' } }}>
            <Grid item xs={5.8} sm={5} md={6} lg={5}>
              <HeyGreekIconButton link="https://apple.com" caption="Download on the" icon={Apple_logo}>
                App Store
              </HeyGreekIconButton>
            </Grid>
            <Grid item xs={5.8} sm={5} md={5} lg={5}>
              <HeyGreekIconButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>
                Google Play
              </HeyGreekIconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Divider sx={{ width: '100%', my: 4, mx: 'auto', borderColor: '#FAFAFA4D' }}/>
      
      <Grid item container xs={12} md={12} lg={12}  justifyContent="space-between">
        <Grid item xs={12} sm={12} md={6} lg={7} sx={{ justifyContent: { lg: 'space-between' }, textAlign: { xs: 'center'} }}>
          <Typography color="#fafafa">HeyGreek© 2024 All rights reserved</Typography>
        </Grid>
        
        <Grid item xs={12} sm={12} md={6} lg={5} display="flex"
              sx={{ justifyContent: { xs: 'space-evenly', md: 'space-between' } }}>
          <Grid item lg="auto">
            <LinkCSS to="#">
              <Typography>FAQ</Typography>
            </LinkCSS>
          </Grid>
          <Grid item lg="auto">
            <LinkCSS to="#">
              <Typography>
                Privacy Policy
              </Typography>
            </LinkCSS>
          </Grid>
          <Grid item lg="auto">
            <LinkCSS to="#">
              <Typography>
                Terms and Conditions
              </Typography>
            </LinkCSS>
          </Grid>
        </Grid>
      </Grid>
    
    </GridCSS>
  );
};
