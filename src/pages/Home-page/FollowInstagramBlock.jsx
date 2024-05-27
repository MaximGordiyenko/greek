import { BackgroundGrid, Wrapper } from './ui.styles.js';
import { Grid, Box, Typography, Button } from '@mui/material';
import Pattern_Instagram from '../../assets/Pattern_Instagram.webp';
import Vector from '../../assets/Vector.webp';

export const FollowInstagramBlock = () => {
  return (
    <BackgroundGrid container display="flex" justifyContent="center" img={Pattern_Instagram} repeat>
      <Wrapper item lg={4} container p={2} border={2} borderRadius={4}
               sx={{ mx: { xs: 3, lg: 4 }, my: { xs: 6, lg: 4 } }}>
        <Box component="img" src={Vector} alt="QR_Code" pr={2} sx={{ display: { xs: 'none', lg: 'flex' } }}/>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Typography paragraph variant="h6">@heygreekapp</Typography>
          <Typography paragraph variant="h4">Follow us on Instagram</Typography>
        </Grid>
        <Button fullWidth variant="contained"
                sx={{ border: 1, borderRadius: 2, display: { xs: 'flex', lg: 'none' } }}>Follow</Button>
      </Wrapper>
    </BackgroundGrid>
  );
};
