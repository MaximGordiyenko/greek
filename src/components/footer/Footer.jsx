import { Grid, Typography, Box, Divider } from '@mui/material';
import { GridCSS, LinkCSS } from './ui.styles.js';
import HeyGreekLogoFooter from '../../assets/HeyGreekLogoFooter.webp';
import { HeyGreekIconButton } from '../buttons/HeyGreekIconButton.jsx';
import facebook from '../../assets/facebook.svg';
import tiktok from '../../assets/tiktok.svg';
import instagram from '../../assets/instagram.svg';
import { AppleStoreIcon } from '../icons/AppleStoreIcon.jsx';
import { GooglePlayMarketIcon } from '../icons/GooglePlayMarketIcon.jsx';

export const Footer = () => {
  return (
    <GridCSS container component="footer" justifyContent="space-between" sx={{ px: { xs: 3, md: 14, lg: 18 }, py: 4 }}>
      
      <Grid item container xs={12} sm={12} md={12} lg={12} justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={12} md={2} lg={2} sx={{ textAlign: { xs: "center" }, pb: { xs: 4, md: 0 } }}>
          <Box component="img" src={HeyGreekLogoFooter} alt="HeyGreekFooterLogo"
               sx={{ width: { xs: '50%', sm: '25%', md: '100%', lg: "100%" } }}
          />
        </Grid>
        
        <Grid item container xs={12} sm={12} md={8} lg={6} alignItems="center"
              sx={{
                justifyContent: { xs: 'space-evenly', lg: 'space-between' },
                flexDirection: { xs: 'column-reverse', md: 'row' }
              }}>
          
          <Grid item container xs={6} sm={5} md={3} lg={2.5} alignItems="center"
                sx={{ justifyContent: { xs: 'space-evenly', lg: 'space-between' }, pb: { xs: 0, md: 0 } }}>
            <Grid item>
              <Box component="img" src={facebook} alt="Facebook_icon"/>
            </Grid>
            <Grid item>
              <Box component="img" src={tiktok} alt="Tik_tok_icon"/>
            </Grid>
            <Grid item>
              <Box component="img" src={instagram} alt="Instagram_icon"/>
            </Grid>
          </Grid>
          
          <Grid item container xs={12} sm={8} md={8.8} lg={8}
                sx={{ justifyContent: { xs: 'space-evenly', lg: 'space-between' }, pb: { xs: 4, md: 0 } }}>
            <Grid item xs={5.6} sm={4} md={5} lg={5.6}>
              <HeyGreekIconButton
                background="transparent" color="#FAFAFA"
                link="https://apple.com" caption="Download on the" icon={<AppleStoreIcon/>}>
                App Store
              </HeyGreekIconButton>
            </Grid>
            <Grid item xs={5.6} sm={4} md={5} lg={5.6}>
              <HeyGreekIconButton
                background="transparent" color="#FAFAFA"
                link="https://google.com" caption="Get it on" icon={<GooglePlayMarketIcon/>}>
                Google Play
              </HeyGreekIconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Divider sx={{ width: '100%', my: 4, mx: 'auto', borderColor: '#FAFAFA4D' }}/>
      
      <Grid item container xs={12} md={12} lg={12} justifyContent="space-between" wrap="no-wrap" alignItems="center"
            sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
        
        <Grid item xs={12} sm={12} md={6} lg={3}
              sx={{ justifyContent: { lg: 'space-between' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography color="#fafafa" sx={{ color: { xs: '#FAFAFA4D', md: '#FAFAFA' }, py: 2 }}>
            HeyGreek© 2024 All rights reserved
          </Typography>
        </Grid>
        
        <Grid item container xs={12} sm={12} md={6} lg={5}
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
