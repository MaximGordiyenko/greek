import { Grid, Typography, Box, Divider } from '@mui/material';
import { GridCSS, LinkCSS } from './ui.styles.js';
import HeyGreekLogoFooter from '../../assets/HeyGreekLogoFooter.webp';
import Facebook_icon from '../../assets/facebook.webp';
import Tik_tok_icon from '../../assets/tiktok.webp';
import Instagram_icon from '../../assets/instagram.webp';
import { HeyGreekButton } from '../buttons/HeyGreekButton.jsx';
import Apple_logo from '../../assets/Apple_logo.webp';
import PlayMarketLogo from '../../assets/PlayMarketLogo.webp';

export const Footer = () => {
  return (
    <GridCSS container sx={{ px: { xs: 4, lg: 18 }, py: 4 }} component="footer" display="flex"
             justifyContent="space-between">
      
      <Grid item xs={12} lg={12} container>
        <Grid item xs={12} lg={6} display="flex" sx={{ justifyContent: { xs: 'space-evenly', lg: 'space-between' } }}>
          <Box component="img" width="25%" src={HeyGreekLogoFooter} alt="HeyGreek"/>
        </Grid>
        
        <Grid item xs={12} lg={6} container display="flex" justifyContent="space-between">
          
          <Grid item xs={12} lg={2} container display="flex" alignItems="center"
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
          
          <Grid item xs={12} lg={8} display="flex" justifyContent="space-between">
            <HeyGreekButton link="https://apple.com" caption="Download on the" icon={Apple_logo}>
              App Store
            </HeyGreekButton>
            
            <HeyGreekButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>
              Google Play
            </HeyGreekButton>
          </Grid>
        </Grid>
      
      </Grid>
      
      <Divider sx={{ width: '100%', my: 4, mx: 'auto', borderColor: '#FAFAFA4D' }}/>
      
      <Grid item lg={12} container display="flex" justifyContent="space-between">
        <Grid item lg={7}>
          <Typography color="#fafafa">HeyGreek© 2024 All rights reserved</Typography>
        </Grid>
        
        <Grid item lg={5} display="flex" justifyContent="space-between">
          <Grid item lg="auto">
            <LinkCSS to="#">FAQ</LinkCSS>
          </Grid>
          <Grid item lg="auto">
            <LinkCSS to="#">Privacy Policy</LinkCSS>
          </Grid>
          <Grid item lg="auto">
            <LinkCSS to="#">Terms and Conditions</LinkCSS>
          </Grid>
        </Grid>
      </Grid>
    
    </GridCSS>
  );
};
