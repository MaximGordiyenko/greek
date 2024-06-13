import { BackgroundGrid } from '../home-page/ui.styles.js';
import { Grid, Typography } from '@mui/material';
import Mosaic_1 from '../../assets/Mosaic_1.webp';
import Mosaic_2 from '../../assets/Mosaic_2.webp';
import Mosaic_3 from '../../assets/Mosaic_3.webp';
import Mosaic_4 from '../../assets/Mosaic_4.webp';
import Mosaic_6 from '../../assets/Mosaic_6.webp';
import Mosaic_7 from '../../assets/Mosaic_7.webp';
import Mosaic_8 from '../../assets/Mosaic_8.webp';
import Mosaic_9 from '../../assets/Mosaic_9.webp';
import { HeyGreekIconButton } from '../../components/buttons/HeyGreekIconButton.jsx';
import { GooglePlayMarketIcon } from '../../components/icons/GooglePlayMarketIcon.jsx';
import { AppleStoreIcon } from '../../components/icons/AppleStoreIcon.jsx';

export const Galleria = () => {
  return (
    <Grid item container>
      <BackgroundGrid item xs={12} md={4} lg={4} width={480} height={300} img={Mosaic_1} border={1}
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}/>
      <BackgroundGrid item xs={12} md={4} lg={4} width={480} height={300} img={Mosaic_2} border={1}
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}/>
      <BackgroundGrid item xs={12} sm={12} md={4} lg={4} width={480} height={300} img={Mosaic_3} border={1}/>
      <BackgroundGrid item xs={12} md={4} lg={4} width={480} height={300} img={Mosaic_6} border={1}
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}/>
      
      <Grid item xs={12} sm={12} md={4} lg={4} container width={480} height={300} textAlign="center" bgcolor="#FBBC04"
            sx={{ px: { xs: 2, sm: 6, md: 2, lg: 3 }, py: { xs: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={12} px={6}>
          <Typography variant="h5" sx={{ fontSize: { md: 24, lg: 32 } }} color="#282C38">
            Unforgettable Experiences await
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontSize={14} color="#282C38">
            Explore a world of unforgettable experiences within the HeyGreek app, where every interaction is filled with
            excitement, laughter, and new connections!
          </Typography>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={11} container mx="auto" display="flex" justifyContent="space-around">
          <Grid item xs={5.4} sm={5} md={5.8} lg={5.5} mx={0}>
            <HeyGreekIconButton link="https://apple.com" caption="Download on the"
                                icon={<AppleStoreIcon color="#03237A"/>}>
              App Store
            </HeyGreekIconButton>
          </Grid>
          <Grid item xs={5.4} sm={5} md={5.8} lg={5.5} mx={0}>
            <HeyGreekIconButton link="https://google.com" caption="Get it on"
                                icon={<GooglePlayMarketIcon color="#03237A"/>}>
              Google Play
            </HeyGreekIconButton>
          </Grid>
        </Grid>
      
      </Grid>
      
      <BackgroundGrid item xs={12} sm={12} md={4} lg={4} width={480} height={300} img={Mosaic_4} border={1}/>
      <BackgroundGrid item xs={12} md={4} lg={4} width={480} height={300} img={Mosaic_7} border={1}
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}/>
      <BackgroundGrid item xs={12} md={4} lg={4} width={480} height={300} img={Mosaic_8} border={1}
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}/>
      <BackgroundGrid item xs={12} md={4} lg={4} width={480} height={300} img={Mosaic_9} border={1}
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}/>
    </Grid>
  );
};
