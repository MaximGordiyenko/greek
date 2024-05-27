import { Grid, Typography, Box } from '@mui/material';
import { BackgroundGrid } from '../Home-page/ui.styles.js';
import Pattern_Bolts from '../../assets/Pattern_Bolts.webp';
import SideHustle_img from '../../assets/SideHustle_img.webp';
import Networthing_img from '../../assets/Networthing_img.webp';
import Charity_img from '../../assets/Charity_img.webp';


export const EstablishConnectionsBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Bolts} repeat>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 4, lg: 6 }, px: { xs: 4, lg: 30 } }}>
        <Typography variant="h2">Establish new connections, discover opportunities</Typography>
        <Typography variant="body1">
          HeyGreek offers a distinctive fusion of networking and dating exclusively for the Greek community
        </Typography>
      </Grid>
      
      <Grid item container display="flex" justifyContent="space-evenly" sx={{ px: { xs: 2, lg: 12 } }}>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box width="100%" component="img" src={Networthing_img} alt="Networthing_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Verified Greeks Only</Typography>
          <Typography paragraph variant="body2">
            Fully secure platform for meaningful relationships and professional networking within the Greek community
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box width="100%" component="img" src={SideHustle_img} alt="SideHustle_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">AI Matching System</Typography>
          <Typography paragraph variant="body2">
            Advanced AI matching system, designed to connect you with compatible Greeks based on your interests,
            preferences, and values
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box width="100%" component="img" src={Charity_img} alt="Charity_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Entertainment</Typography>
          <Typography paragraph variant="body2">
            Experience the unique Greek style features within our app and have fun while dating, or date while having
            a fun
          </Typography>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
