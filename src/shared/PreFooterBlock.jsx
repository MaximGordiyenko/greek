import { Grid, Typography } from '@mui/material';
import { BackgroundGrid, Wrapper } from '../pages/home-page/ui.styles.js';
import { HeyGreekIconButton } from '../components/buttons/HeyGreekIconButton.jsx';
import { AppleStoreIcon } from '../components/icons/AppleStoreIcon.jsx';
import { GooglePlayMarketIcon } from '../components/icons/GooglePlayMarketIcon.jsx';

export const PreFooterBlock = ({ img, head, body }) => {
  return (
    <BackgroundGrid container img={img}>
      <Wrapper textAlign="center" border={1} borderColor="primary" borderRadius={3}
               sx={{
                 maxWidth: { lg: 540 },
                 mt: { xs: 45, sm: 40, md: 50, lg: 70 },
                 mb: 5,
                 mx: { xs: 2, sm: 20, md: 30, lg: 'auto' },
                 p: { xs: 2, lg: 3 }
               }}>
        
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <Typography variant="h3" sx={{ fontSize: { xs: 24 } }}>{head}</Typography>
          <Typography paragraph variant="body1" sx={{ fontSize: { xs: 14 }, pt: 1 }}>{body}</Typography>
        </Grid>
        
        <Grid item container justifyContent="center">
          <Grid item xs={12} sm={5.2} md={4.9} lg={4.5} m={1}>
            <HeyGreekIconButton link="https://apple.com" caption="Download on the"
                                icon={<AppleStoreIcon color="#03237A"/>}>
              App Store
            </HeyGreekIconButton>
          </Grid>
          <Grid item xs={12} sm={5.2} md={4.9} lg={4.5} m={1}>
            <HeyGreekIconButton link="https://google.com" caption="Get it on"
                                icon={<GooglePlayMarketIcon color="#03237A"/>}>
              Google Play
            </HeyGreekIconButton>
          </Grid>
        </Grid>
      
      </Wrapper>
    </BackgroundGrid>
  );
};
