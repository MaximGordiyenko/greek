import { BackgroundGrid } from '../home-page/ui.styles.js';
import Pattern_Bolts from '../../assets/Pattern_Bolts.webp';
import { Grid, Typography, Box } from '@mui/material';
import Puzzle_img from '../../assets/Puzzle_img.webp';

export const OurMissionBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Bolts} repeat py={4}>
      <Grid item container display="flex" alignItems="center"
            sx={{ px: { xs: 4, sm: 10, md: 20, lg: 32 }, py: { xs: 6 } }}>
        
        <Grid item container xs={12} sm={6} md={6} lg={6}>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Typography gutterBottom variant="h3" sx={{ fontSize: {xs: 48, sm: 44, md: 50, lg: 54} }}>
              Our mission is simple...
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <Typography paragraph variant="body2" sx={{ fontSize: {xs: 16, sm: 14,  md: 16, lg: 18} }}>
              We eager to provide a dynamic platform where Greek members can connect, build meaningful relationships,
              and unlock endless opportunities within their community.
            </Typography>
          </Grid>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box width="100%" sx={{ height: { xs: 250, sm: 250, md: 300, lg: 350 } }} component="img" src={Puzzle_img}
               alt="Puzzle_img"
               border={1} borderColor="primary" borderRadius={3}/>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
