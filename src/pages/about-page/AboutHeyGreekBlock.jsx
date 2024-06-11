import About_Hero from '../../assets/About_Hero.webp';
import Hey_greek_white from '../../assets/Hey_greek_white.webp';
import { Grid, Box, Typography } from '@mui/material';
import { BackgroundGrid } from '../home-page/ui.styles.js';

export const AboutHeyGreekBlock = () => {
  return (
    <BackgroundGrid container img={About_Hero} height={400}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ mt: { xs: 2, sm: 10, md: 15, lg: 10 }, py: { xs: 4, lg: 6 }, px: { xs: 4, sm: 20, md: 20, lg: 40 } }}>
        <Typography variant="h2" color="#fafafa" sx={{ fontSize: { xs: 48, lg: 64 } }}>
          About the Heygreek App
        </Typography>
        <Typography variant="caption" color="#fafafa" sx={{ fontSize: { xs: 16, lg: 18 } }}>
          At HeyGreek, Greek connections flourish into meaningful relationships and professional networking
          opportunities. Our vibrant community offers the best of Greek life, conveniently accessible in one app
          experience.
        </Typography>
      </Grid>
    </BackgroundGrid>
  );
};
