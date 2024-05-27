import { BackgroundGrid } from '../Home-page/ui.styles.js';
import Pattern_Bolts from '../../assets/Pattern_Bolts.webp';
import { Grid, Typography, Box } from '@mui/material';
import Puzzle_img from '../../assets/Puzzle_img.webp';

export const OurMissionBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Bolts} repeat>
      <Grid item container display="flex" justifyContent="space-evenly" alignItems="center"
            sx={{ px: { xs: 4, lg: 38 }, py: { xs: 6 } }}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Typography gutterBottom variant="h3">Our mission is simple...</Typography>
          <Typography paragraph variant="body2">
            We eager to provide a dynamic platform where Greek members can connect, build meaningful relationships, and
            unlock endless opportunities within their community.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box width="100%" sx={{ height: { xs: 250, lg: 350 } }} component="img" src={Puzzle_img} alt="Puzzle_img"
               border={1} borderColor="primary" borderRadius={3}/>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
