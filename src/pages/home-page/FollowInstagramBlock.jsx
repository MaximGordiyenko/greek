import { BackgroundGrid, Wrapper } from './ui.styles.js';
import { Grid, Box, Typography, Button } from '@mui/material';
import Pattern_Instagram from '../../assets/Pattern_Instagram.webp';
import Vector from '../../assets/Vector.webp';
import { HeyGreekButton } from '../../components/buttons/HeyGreekButton.jsx';

export const FollowInstagramBlock = () => {
  return (
    <BackgroundGrid container justifyContent="center" img={Pattern_Instagram} repeat>
      <Wrapper item sm={6} md={6} lg={4.8} container p={3} border={2} borderRadius={4}
               sx={{ mx: { xs: 3, lg: 4 }, my: { xs: 6, md: 8, lg: 8 } }}>
        <Box component="img" src={Vector} width={150} height={150} alt="QR_Code" pr={4}
             sx={{ display: { xs: 'none', lg: 'flex' } }}
        />
        <Grid item xs={12} sm={12} md={12} lg={7} textAlign="left">
          <Typography color="#282C38" fontSize={24} fontWeight={700}>@heygreekapp</Typography>
          <Typography variant="h4" fontSize={46}>Follow us <br/> on Instagram</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: { xs: 'flex', lg: 'none' } }}>
          <HeyGreekButton fullWidth mt={2}>Follow</HeyGreekButton>
        </Grid>
      </Wrapper>
    </BackgroundGrid>
  );
};
