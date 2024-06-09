import { BackgroundGrid } from '../home-page/ui.styles.js';
import { Grid, Typography, Box } from '@mui/material';
import Pattern_Hearts from '../../assets/Pattern_Hearts.webp';
import Drinks_img from '../../assets/Drinks_img.webp';
import Serenades_img from '../../assets/Serenades_img.webp';
import Senses_img from '../../assets/Senses_img.webp';

export const BringTheFunBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Hearts} repeat py={6}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 4, md: 8, lg: 4 }, px: { xs: 4, sm: 20, md: 30, lg: 60 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: 52 } }}>Bringing the fun into dating</Typography>
      </Grid>
      
      <Grid item container display="flex" justifyContent="space-evenly" sx={{ px: { xs: 3, lg: 14 } }}>
        <Grid item xs={12} sm={8} md={8} lg={3.3} pb={4}>
          <Box width="100%" component="img" src={Drinks_img} alt="Drinks_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom fontSize={24}>Drinks</Typography>
          <Typography paragraph variant="body2">
            Stir up conversations over virtual drinks, making every interaction feel like a toast to new connections.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={3.3} pb={4}>
          <Box width="100%" component="img" src={Serenades_img} alt="Serenades_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom fontSize={24}>Serenades</Typography>
          <Typography paragraph variant="body2">
            Set the mood with virtual serenades, adding a touch of romance and charm to your conversations.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={3.3} pb={4}>
          <Box width="100%" component="img" src={Senses_img} alt="Senses_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom fontSize={24}>Senses</Typography>
          <Typography paragraph variant="body2">
            Engage all your senses as you explore new connections and experiences, creating unforgettable moments in the
            world of HeyGreek
          </Typography>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
