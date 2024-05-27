import About_Hero from '../../assets/About_Hero.webp';
import Hey_greek_white from '../../assets/Hey_greek_white.webp';
import { Grid, Box, Typography } from '@mui/material';
import { BackgroundGrid } from '../Home-page/ui.styles.js';

export const AboutHeyGreekBlock = () => {
  return (
    <BackgroundGrid container img={About_Hero} height={400}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ mt: { xs: 4, lg: 10 }, py: { xs: 4, lg: 6 }, px: { xs: 4, lg: 30 } }}>
        <Box component="img" src={Hey_greek_white} alt="Hey_greek_white"/>
        <Typography variant="h2" color="#fafafa">Dating app for greeks</Typography>
        <Typography variant="caption" color="#fafafa">
          At HeyGreek, Greek connections flourish into meaningful relationships and professional networking opportunities. Our vibrant community offers the best of Greek life, conveniently accessible in one app experience.
        </Typography>
      </Grid>
    </BackgroundGrid>
  );
};
