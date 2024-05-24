import { BackgroundGrid } from './ui.styles.js';
import Pattern_Asterisk from '../../assets/Pattern_Asterisk.svg';
import { Box, Typography, Grid } from '@mui/material';
import Story1_img from '../../assets/Story1_img.svg';
import Story2_img from '../../assets/Story2_img.svg';
import Story3_img from '../../assets/Story3_img.svg';

export const SuccessStoriesBlock = () => {
  return (
    <Grid container>
      <BackgroundGrid item xs={12} sm={12} md={12} lg={12} repeat img={Pattern_Asterisk}>
        <Box textAlign="center" mx="auto" sx={{ mt: { xs: 10, lg: 10 } }}>
          <Typography variant="h2">Success stories</Typography>
        </Box>
        
        <Grid container display="flex" justifyContent="space-evenly" sx={{ px: { xs: 5, lg: 15 } }}>
          <Grid item xs={12} sm={12} md={12} lg={3} textAlign="center" mx="auto" border={1} borderColor="primary"
                borderRadius={3}>
            <Box width="100%" component="img" src={Story1_img} alt="Story1_img"/>
            <Typography variant="h6">20 February 2023</Typography>
            <Typography variant="body2">
              “After downloading HeyGreek, we suddenly discovered that we are neighbors... After a couple of drinks, I agreed to go for coffee with Nathan)...
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} textAlign="center" mx="auto" border={1} borderColor="primary"
                borderRadius={3}>
            <Box width="100%" component="img" src={Story2_img} alt="Story2_img"/>
            <Typography variant="h6">25 March 2024</Typography>
            <Typography variant="body2">
              “Thanks to networking on HeyGrik, I was able to find the most interesting sisterhood at the university for myself. There's no limit to my happiness!!!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} textAlign="center" mx="auto" border={1} borderColor="primary"
                borderRadius={3}>
            <Box width="100%" component="img" src={Story3_img} alt="Story3_img"/>
            <Typography variant="h6">15 April 2024</Typography>
            <Typography variant="body2">
              “HeyGreek truly brings people together... We met at a shared experience, something like a rock concert, and after 2 months, he proposed to me. Can you believe it?...
            </Typography>
          </Grid>
        </Grid>
      </BackgroundGrid>
    </Grid>
  );
};
