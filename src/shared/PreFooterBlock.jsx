import { Grid, Typography } from '@mui/material';
import { BackgroundGrid, Wrapper } from '../pages/Home-page/ui.styles.js';
import { HeyGreekButton } from '../components/buttons/HeyGreekButton.jsx';
import Apple_logo from '../assets/Apple_logo.webp';
import PlayMarketLogo from '../assets/PlayMarketLogo.webp';

export const PreFooterBlock = ({ img, head, body }) => {
  return (
    <Grid container>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={12} height={800} img={img}>
        <Wrapper sx={{ mt: { xs: 36, lg: 62 }, mx: { xs: 2, lg: 40 }, p: { xs: 2, lg: 2 } }}
                 textAlign="center" border={1} borderColor="primary" borderRadius={3}>
          <Typography variant="h3">{head}</Typography>
          <Typography paragraph variant="body1">{body}</Typography>
          <HeyGreekButton link="https://apple.com" caption="Download on the" icon={Apple_logo}>
            App Store
          </HeyGreekButton>
          <HeyGreekButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>
            Google Play
          </HeyGreekButton>
        </Wrapper>
      </BackgroundGrid>
    </Grid>
  );
};
