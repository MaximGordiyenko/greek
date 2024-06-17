import { Typography, Grid } from '@mui/material';

import { BackgroundGrid, Wrapper } from './ui.styles.js';

import Pattern_Stars from '../../assets/Pattern_Stars.webp';
import Dating_omg from '../../assets/Dating_omg.webp';
import Connecting_img from '../../assets/Connecting_img.webp';
import { HeyGreekButton } from '../../components/buttons/HeyGreekButton.jsx';

export const MoreThenDatingBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Stars} repeat>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 4, lg: 6 }, px: { xs: 4, sm: 14, md: 25, lg: 50 } }}>
        <Typography variant="h2">More then Dating</Typography>
        <Typography variant="body1">
          HeyGreek is a space where members of Greek organizations nationwide can connect on multiple levels:
          romantically, socially, and professionally.
        </Typography>
      </Grid>
      
      <Grid item container>
        <BackgroundGrid item xs={12} sm={6} md={6} lg={6} height={500} img={Dating_omg}>
          <Wrapper textAlign="center" border={1} borderColor="primary" borderRadius={3}
                   sx={{ mt: { xs: 36, sm: 34, lg: 36 }, mx: { xs: 2, sm: 5, md: 12, lg: 'auto' }, p: { xs: 2, lg: 2 }, maxWidth: 360 }}>
            <Typography variant="h3" sx={{ fontSize: { sm: 35, lg: 35 } }}>Dating</Typography>
            <Typography paragraph variant="body1">
              Connect with Greek members nearby for meaningful relationships
            </Typography>
            <HeyGreekButton link="/dating">Learn more</HeyGreekButton>
          </Wrapper>
        </BackgroundGrid>
        <BackgroundGrid item xs={12} sm={6} md={6} lg={6} height={500} img={Connecting_img}>
          <Wrapper textAlign="center" border={1} borderColor="primary" borderRadius={3}
                   sx={{ mt: { xs: 36, sm: 34, lg: 36 }, mx: { xs: 2, sm: 6, md: 12, lg: 'auto' }, p: { xs: 2, lg: 2 }, maxWidth: 360 }}>
            <Typography variant="h3" sx={{ fontSize: { sm: 35, lg: 35 } }}>Connecting</Typography>
            <Typography paragraph variant="body1">
              Forge professional connections within the Greek community
            </Typography>
            <HeyGreekButton link="/networking">Learn more</HeyGreekButton>
          </Wrapper>
        </BackgroundGrid>
      </Grid>
    </BackgroundGrid>
  );
};
