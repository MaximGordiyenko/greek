import { Box, Typography, Button, Grid } from '@mui/material';

import { BackgroundGrid, BoxCSS } from './ui.styles.js';

import Pattern_Stars from '../../assets/Pattern_Stars.svg';
import Dating_omg from '../../assets/Dating_omg.svg';
import Connecting_img from '../../assets/Connecting_img.svg';

export const MoreThenDatingBlock = () => {
  return (
    <Grid container>
      <BackgroundGrid item xs={12} sm={12} md={12} lg={12} img={Pattern_Stars} repeat textAlign="center" height={250}>
        <Grid item textAlign="center" sx={{ pt: { xs: 8, lg: 12 }, px: { xs: 4, lg: 50 } }}>
          <Typography variant="h2">More then Dating</Typography>
          <Typography variant="body1">
            HeyGreek is a space where members of Greek organizations nationwide can connect on multiple levels:
            romantically, socially, and professionally.
          </Typography>
        </Grid>
      </BackgroundGrid>
      <Grid container>
        <BackgroundGrid item xs={12} sm={12} md={6} lg={6} height={500} img={Dating_omg}>
          <BoxCSS textAlign="center" width={300} mx="auto" sx={{ mt: { xs: 36, lg: 40 } }}
                  border={1} borderColor="primary" borderRadius={3} px={5} py={2}>
            <Typography variant="h3">Dating</Typography>
            <Typography variant="body1">
              Connect with Greek members nearby for meaningful relationships
            </Typography>
            <Button variant="contained" sx={{ border: 1, borderRadius: 2 }}>Learn more</Button>
          </BoxCSS>
        </BackgroundGrid>
        <BackgroundGrid item xs={12} sm={12} md={6} lg={6} height={500} img={Connecting_img}>
          <BoxCSS textAlign="center" width={300} mx="auto" sx={{ mt: { xs: 36, lg: 40 } }}
                  border={1} borderColor="primary" borderRadius={3} px={5} py={2}>
            <Typography variant="h3">Connecting</Typography>
            <Typography variant="body1">
              Forge professional connections within the Greek community
            </Typography>
            <Button variant="contained" sx={{ border: 1, borderRadius: 2 }}>Learn more</Button>
          </BoxCSS>
        </BackgroundGrid>
      </Grid>
    </Grid>
  );
};
