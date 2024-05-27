import { Typography, Button, Grid } from '@mui/material';

import { BackgroundGrid, Wrapper } from './ui.styles.js';

import Pattern_Stars from '../../assets/Pattern_Stars.webp';
import Dating_omg from '../../assets/Dating_omg.webp';
import Connecting_img from '../../assets/Connecting_img.webp';

export const MoreThenDatingBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Stars} repeat>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 4, lg: 6 }, px: { xs: 4, lg: 50 } }}>
        <Typography variant="h2">More then Dating</Typography>
        <Typography variant="body1">
          HeyGreek is a space where members of Greek organizations nationwide can connect on multiple levels:
          romantically, socially, and professionally.
        </Typography>
      </Grid>
      
      <Grid item container>
        <BackgroundGrid item xs={12} sm={12} md={6} lg={6} height={500} img={Dating_omg}>
          <Wrapper textAlign="center" sx={{ mt: { xs: 36, lg: 36 }, mx: { xs: 2, lg: 22 }, p: { xs: 2, lg: 2 } }}
                  border={1} borderColor="primary" borderRadius={3}>
            <Typography variant="h3">Dating</Typography>
            <Typography paragraph variant="body1">
              Connect with Greek members nearby for meaningful relationships
            </Typography>
            <Button fullWidth variant="contained" sx={{ border: 1, borderRadius: 2 }}>Learn more</Button>
          </Wrapper>
        </BackgroundGrid>
        <BackgroundGrid item xs={12} sm={12} md={6} lg={6} height={500} img={Connecting_img}>
          <Wrapper textAlign="center" sx={{ mt: { xs: 36, lg: 36 }, mx: { xs: 2, lg: 22 }, p: { xs: 2, lg: 2 } }}
                  border={1} borderColor="primary" borderRadius={3}>
            <Typography variant="h3">Connecting</Typography>
            <Typography paragraph variant="body1">
              Forge professional connections within the Greek community
            </Typography>
            <Button fullWidth variant="contained" sx={{ border: 1, borderRadius: 2 }}>Learn more</Button>
          </Wrapper>
        </BackgroundGrid>
      </Grid>
    </BackgroundGrid>
  );
};
