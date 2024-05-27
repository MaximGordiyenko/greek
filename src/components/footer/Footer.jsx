import { Grid, Typography, Box, Divider } from '@mui/material';
import { GridCSS, LinkCSS } from './ui.styles.js';
import HeyGreek from '../../assets/HeyGreek.svg';
import Facebook_icon from '../../assets/Facebook_icon.svg';
import Tik_tok_icon from '../../assets/Tik_tok_icon.svg';
import Instagram_icon from '../../assets/Instagram_icon.svg';

export const Footer = () => {
  return (
    <GridCSS container sx={{ px: 18, py: 4 }} component="footer">
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box component="img" width="25%" src={HeyGreek} alt="HeyGreek"/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box display="flex" justifyContent="space-between" width={100}>
          <Box component="img" width="25%" src={Facebook_icon} alt="Facebook_icon"/>
          <Box component="img" width="25%" src={Tik_tok_icon} alt="Tik_tok_icon"/>
          <Box component="img" width="25%" src={Instagram_icon} alt="Instagram_icon"/>
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
