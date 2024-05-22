import { Box, Typography, Grid } from '@mui/material';

import Pattern_Bolts from '../../assets/Pattern_Bolts.svg';
import Greeks_img from '../../assets/Greeks_img.svg';
import Matching_img from '../../assets/Matching_img.svg';
import Entertainment_img from '../../assets/Entertainment_img.svg';
import Community_img from '../../assets/Community_img.svg';

import { BackgroundGrid } from './ui.styles.js';

export const WhyHeyGreekBlock = () => {
  return (
    <Grid container>
      <BackgroundGrid item xs={12} sm={12} md={12} lg={12} repeat img={Pattern_Bolts}>
        <Box textAlign="center" mx="auto" sx={{ mt: { xs: 10, lg: 10 } }}>
          <Typography variant="h2">Why HeyGreek?</Typography>
          <Typography variant="body1">
            HeyGreek offers a distinctive fusion of networking and dating exclusively for the Greek community
          </Typography>
        </Box>
        
        <Grid container display="flex" justifyContent="space-evenly" sx={{ px: { xs: 5, lg: 15 } }}>
          <Grid item xs={12} sm={12} md={12} lg={2.5} textAlign="center" mx="auto">
            <Box width="100%" component="img" src={Greeks_img} alt="Greeks_img" border={1} borderColor="primary"
                 borderRadius={3}/>
            <Typography variant="h4">Verified Greeks Only</Typography>
            <Typography variant="body2">
              Fully secure platform for meaningful relationships and professional networking within the Greek community
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2.5} textAlign="center" mx="auto">
            <Box width="100%" component="img" src={Matching_img} alt="Matching_img" border={1} borderColor="primary"
                 borderRadius={3}/>
            <Typography variant="h4">AI Matching System</Typography>
            <Typography variant="body2">
              Advanced AI matching system, designed to connect you with compatible Greeks based on your interests,
              preferences, and values
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2.5} textAlign="center" mx="auto">
            <Box width="100%" component="img" src={Entertainment_img} alt="Entertainment_img" border={1}
                 borderColor="primary" borderRadius={3}/>
            <Typography variant="h4">Entertainment</Typography>
            <Typography variant="body2">
              Experience the unique Greek style features within our app and have fun while dating, or date while having
              a fun
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2.5} textAlign="center" mx="auto">
            <Box width="100%" component="img" src={Community_img} alt="Community_img" border={1} borderColor="primary"
                 borderRadius={3}/>
            <Typography variant="h4">Community</Typography>
            <Typography variant="body2">
              Experience the vibrant Greek community and connect with others who share your passionfor fun and
              friendship
            </Typography>
          </Grid>
        </Grid>
      </BackgroundGrid>
    </Grid>
  );
};
