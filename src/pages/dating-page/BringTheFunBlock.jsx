import Pattern_Bolts from '../../assets/Pattern_Bolts.svg';
import { Grid, Typography, Box } from '@mui/material';
import Greeks_img from '../../assets/Greeks_img.svg';
import Matching_img from '../../assets/Matching_img.svg';
import Entertainment_img from '../../assets/Entertainment_img.svg';
import { BackgroundGrid } from '../Home-page/ui.styles.js';

export const BringTheFunBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Bolts} repeat>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 4, lg: 6 }, px: { xs: 4, lg: 50 } }}>
        <Typography variant="h2">Bringing the fun into dating</Typography>
      </Grid>
      
      <Grid item container display="flex" justifyContent="space-evenly" sx={{ px: { xs: 2, lg: 12 } }}>
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <Box width="100%" component="img" src={Greeks_img} alt="Greeks_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Drinks</Typography>
          <Typography paragraph variant="body2">
            Stir up conversations over virtual drinks, making every interaction feel like a toast to new connections.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <Box width="100%" component="img" src={Matching_img} alt="Matching_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Serenades</Typography>
          <Typography paragraph variant="body2">
            Set the mood with virtual serenades, adding a touch of romance and charm to your conversations.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <Box width="100%" component="img" src={Entertainment_img} alt="Entertainment_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Senses</Typography>
          <Typography paragraph variant="body2">
            Engage all your senses as you explore new connections and experiences, creating unforgettable moments in the world of HeyGreek
          </Typography>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
