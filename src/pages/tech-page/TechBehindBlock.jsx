import { Grid, Typography, Box } from '@mui/material';
import { BackgroundGrid } from '../Home-page/ui.styles.js';
import Pattern_Asterisk from '../../assets/Pattern_Asterisk.webp';
import Matching_img from '../../assets/Matching_img.webp';
import Messaging_img from '../../assets/Messaging_img.webp';
import Innovation_img from '../../assets/Innovation_img.webp';

export const TechBehindBlock = () => {
  return (
    <BackgroundGrid container img={Pattern_Asterisk} repeat>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ py: { xs: 4, lg: 6 }, px: { xs: 4, lg: 30 } }}>
        <Typography variant="h2">The tech behind the heygreek</Typography>
        <Typography variant="body1">
          At HeyGreek, we pride ourselves on leveraging cutting-edge technology to create a seamless and enjoyable user
          experience for our members. Our platform combines innovative features with robust security measures to ensure
          that every interaction on HeyGreek is safe, efficient, and meaningful.
        </Typography>
      </Grid>
      
      <Grid item container display="flex" justifyContent="space-evenly" sx={{ px: { xs: 2, lg: 12 } }}>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box width="100%" height={250} component="img" src={Matching_img} alt="Matching_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Advanced Matching Algorithm</Typography>
          <Typography paragraph variant="body2">
            Our proprietary matching algorithm utilizes artificial intelligence to connect users with compatible
            individuals based on their interests, preferences, and values.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box width="100%" height={250} component="img" src={Messaging_img} alt="Messaging_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Secure Messaging</Typography>
          <Typography paragraph variant="body2">
            Communication on HeyGreek is protected by end-to-end encryption, ensuring the privacy and security of our
            users' conversations.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box width="100%" height={250} component="img" src={Innovation_img} alt="Innovation_img"
               border={1} borderColor="primary" borderRadius={3}/>
          <Typography gutterBottom variant="h5">Continuous Innovation</Typography>
          <Typography paragraph variant="body2">
            We are committed to continuously improving HeyGreek by implementing user feedback, staying up-to-date with
            the latest technological advancements, and exploring new ways to enhance the user experience.
          </Typography>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};
