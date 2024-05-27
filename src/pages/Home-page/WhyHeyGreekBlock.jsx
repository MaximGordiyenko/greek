import { Box, Typography, Grid } from '@mui/material';

import Pattern_Bolts from '../../assets/Pattern_Bolts.svg';
import Greeks_img from '../../assets/Greeks_img.svg';
import Matching_img from '../../assets/Matching_img.svg';
import Entertainment_img from '../../assets/Entertainment_img.svg';
import Community_img from '../../assets/Community_img.svg';

import { BackgroundGrid } from './ui.styles.js';

export const WhyHeyGreekBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Bolts} repeat>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 4, lg: 6 }, px: { xs: 4, lg: 50 } }}>
        <Typography variant="h2">Why HeyGreek?</Typography>
        <Typography variant="body1">
          HeyGreek offers a distinctive fusion of networking and dating exclusively for the Greek community
        </Typography>
      </Grid>
      
      <Grid item container display="flex" justifyContent="space-evenly" sx={{ px: { xs: 2, lg: 12 } }}>
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <Box width="100%" component="img" src={Greeks_img} alt="Greeks_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Verified Greeks Only</Typography>
          <Typography paragraph variant="body2">
            Fully secure platform for meaningful relationships and professional networking within the Greek community
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <Box width="100%" component="img" src={Matching_img} alt="Matching_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">AI Matching System</Typography>
          <Typography paragraph variant="body2">
            Advanced AI matching system, designed to connect you with compatible Greeks based on your interests,
            preferences, and values
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <Box width="100%" component="img" src={Entertainment_img} alt="Entertainment_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Entertainment</Typography>
          <Typography paragraph variant="body2">
            Experience the unique Greek style features within our app and have fun while dating, or date while having
            a fun
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <Box width="100%" component="img" src={Community_img} alt="Community_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Community</Typography>
          <Typography paragraph variant="body2">
            Experience the vibrant Greek community and connect with others who share your passionfor fun and
            friendship
          </Typography>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
