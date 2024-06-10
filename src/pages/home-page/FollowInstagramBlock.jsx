import { BackgroundGrid, Wrapper } from './ui.styles.js';
import { Grid, Box, Typography, Button } from '@mui/material';
import Pattern_Instagram from '../../assets/Pattern_Instagram.webp';
import Vector from '../../assets/Vector.webp';
import { HeyGreekButton } from '../../components/buttons/HeyGreekButton.jsx';

export const FollowInstagramBlock = () => {
  return (
    <BackgroundGrid container display="flex" justifyContent="center" img={Pattern_Instagram} repeat>
      <Wrapper item sm={6} md={6} lg={4} container p={3} border={2} borderRadius={4} textAlign="center"
               sx={{ mx: { xs: 3, lg: 4 }, my: { xs: 6, md: 8, lg: 8 } }}>
        <Box component="img" src={Vector} alt="QR_Code" pr={2} sx={{ display: { xs: 'none', lg: 'flex' } }}/>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Typography paragraph variant="h6">@heygreekapp</Typography>
          <Typography paragraph variant="h4">Follow us on Instagram</Typography>
        </Grid>
        <HeyGreekButton fullWidth mt={2}>Follow</HeyGreekButton>
      </Wrapper>
    </BackgroundGrid>
  );
};
