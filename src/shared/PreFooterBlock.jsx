import { Grid, Typography } from '@mui/material';
import { BackgroundGrid, Wrapper } from '../pages/home-page/ui.styles.js';
import { HeyGreekIconButton } from '../components/buttons/HeyGreekIconButton.jsx';
import Apple_logo from '../assets/Apple_logo.webp';
import PlayMarketLogo from '../assets/PlayMarketLogo.webp';

export const PreFooterBlock = ({ img, head, body }) => {
  return (
    <BackgroundGrid container img={img}>
      <Wrapper textAlign="center" border={1} borderColor="primary" borderRadius={3}
               sx={{
                 mt: { xs: 45, sm: 40, md: 50, lg: 70 },
                 mb: 5,
                 mx: { xs: 2, sm: 20, md: 30, lg: 55 },
                 p: { xs: 2, lg: 3 } }}>
        
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <Typography variant="h3" sx={{ fontSize: { xs: 24 } }}>{head}</Typography>
          <Typography paragraph variant="body1" sx={{ fontSize: { xs: 14 }, pt: 1 }}>{body}</Typography>
        </Grid>
        
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={5} md={3.8} lg={4} m={1}>
            <HeyGreekIconButton link="https://apple.com" caption="Download on the" icon={Apple_logo}>
              App Store
            </HeyGreekIconButton>
          </Grid>
          <Grid item xs={12} sm={5} md={3.8} lg={4} m={1}>
            <HeyGreekIconButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>
              Google Play
            </HeyGreekIconButton>
          </Grid>
        </Grid>
      
      </Wrapper>
    </BackgroundGrid>
  );
};
