import { Grid, Typography, Box } from '@mui/material';
import { BackgroundGrid } from '../home-page/ui.styles.js';
import Pattern_Bolts from '../../assets/Pattern_Bolts.webp';
import SideHustle_img from '../../assets/SideHustle_img.webp';
import Networthing_img from '../../assets/Networthing_img.webp';
import Charity_img from '../../assets/Charity_img.webp';


export const EstablishConnectionsBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Bolts} repeat py={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 4, lg: 6 }, px: { xs: 4, sm: 15, lg: 30 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: 40 } }}>
          Establish new connections, discover opportunities
        </Typography>
        <Typography variant="body1">
          HeyGreek offers a distinctive fusion of networking and dating exclusively for the Greek community
        </Typography>
      </Grid>
      
      <Grid item container display="flex" justifyContent="space-evenly" sx={{ px: { xs: 2, lg: 12 } }}>
        <Grid item xs={12} sm={8} md={3} lg={3} py={2}>
          <Box width="100%" component="img" src={Networthing_img} alt="Networthing_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom>Greek Buddy</Typography>
          <Typography paragraph variant="body2">
            Expand your professional circle within the Greek community. Connect with fellow members for career opportunities, mentorship, and collaborations.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={3} lg={3} py={2}>
          <Box width="100%" component="img" src={SideHustle_img} alt="SideHustle_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom>Side Hustle</Typography>
          <Typography paragraph variant="body2">
            Whether you're a recent graduate or a seasoned professional, HeyGreek is your gateway to career advancement within your fraternity or sorority network.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={3} lg={3} py={2}>
          <Box width="100%" component="img" src={Charity_img} alt="Charity_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom>Charity</Typography>
          <Typography paragraph variant="body2">
            Give back to your community and make a difference through philanthropic endeavors. Explore volunteer opportunities, fundraising events, and charitable initiatives organized by HeyGreek and supported by members like you.
          </Typography>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
