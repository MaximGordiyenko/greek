import { Grid, Typography, Box, Divider } from '@mui/material';
import { GridCSS, LinkCSS } from './ui.styles.js';
import HeyGreekLogoFooter from '../../assets/HeyGreekLogoFooter.webp';
import Facebook_icon from '../../assets/facebook.webp';
import Tik_tok_icon from '../../assets/tiktok.webp';
import Instagram_icon from '../../assets/instagram.webp';

export const Footer = () => {
  return (
    <GridCSS container sx={{ px: 18, py: 4 }} component="footer">
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box component="img" width="25%" src={HeyGreekLogoFooter} alt="HeyGreek"/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box display="flex" justifyContent="space-between" width={100}>
          <Box component="img" src={Facebook_icon} alt="Facebook_icon"/>
          <Box component="img" src={Tik_tok_icon} alt="Tik_tok_icon"/>
          <Box component="img" src={Instagram_icon} alt="Instagram_icon"/>
        </Box>
      </Grid>
      
      <Divider sx={{ width: '100%', my: 4, mx: 'auto', borderColor: '#FAFAFA4D' }}/>
      
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Typography>HeyGreek© 2024 All rights reserved</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} display="flex" justifyContent="space-between">
        <LinkCSS to="#">FAQ</LinkCSS>
        <LinkCSS to="#">Privacy Policy</LinkCSS>
        <LinkCSS to="#">Terms and Conditions</LinkCSS>
      </Grid>
    </GridCSS>
  );
};
