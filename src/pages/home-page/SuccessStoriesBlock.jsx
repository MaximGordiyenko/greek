import { useState } from 'react';
import { BackgroundGrid } from './ui.styles.js';
import { Box, Typography, Grid, styled } from '@mui/material';
import Pattern_Asterisk from '../../assets/Pattern_Asterisk.webp';
import Story1_img from '../../assets/Story1_img.webp';
import Story2_img from '../../assets/Story2_img.webp';
import Story3_img from '../../assets/Story3_img.webp';
import Play_icon from '../../assets/playButton.svg';
import { ModalComponent } from '../../components/modal/ModalComponent.jsx';

export const SuccessStoriesBlock = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  
  return (
    <BackgroundGrid container img={Pattern_Asterisk} repeat>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center"
            sx={{ pt: { xs: 4, lg: 10 }, mx: { xs: 4, lg: 50 } }}>
        <Typography variant="h2">Success stories</Typography>
      </Grid>
      
      <Grid item container display="flex" justifyContent="space-evenly"
            sx={{ mx: { xs: 2, lg: 'auto' }, mt: 6, mb: 4, maxWidth: 1200 }}>
        <Grid item xs={12} sm={6} md={6} lg={3.6} border={2} borderColor="primary" borderRadius={4}
              sx={{ mx: 2, mb: 6 }}>
          <BoxImage img={Story1_img} height={440}>
            <Box component="img" src={Play_icon} alt="Play_icon" position="absolute" bottom={15} right={15}
                 sx={{ cursor: 'pointer'}} onClick={() => setIsOpenModal3(true)}
            />
            <ModalComponent
              url='https://www.youtube.com/watch?v=Fr_MHKIYBcg&ab_channel=MemeableData'
              isOpenModal={isOpenModal3}
              onClose={() => setIsOpenModal3(false)}
            />
          </BoxImage>
          <Box p={2}>
            <Typography paragraph variant="caption" color="#282C3899">20 February 2023</Typography>
            <Typography variant="body2">
              “After downloading HeyGreek, we suddenly discovered that we are neighbors... After a couple of drinks, I
              agreed to go for coffee with Nathan)...
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} lg={3.6} border={2} borderColor="primary" borderRadius={4}
              sx={{ mx: 2, mb: 6 }}>
          <BoxImage img={Story2_img} height={440}>
            <Box component="img" src={Play_icon} alt="Play_icon" position="absolute" bottom={15} right={15}
                 sx={{ cursor: 'pointer'}} onClick={() => setIsOpenModal2(true)}
            />
            <ModalComponent
              url='https://www.youtube.com/watch?v=eYRgTj9MRLg&ab_channel=MemeableData'
              isOpenModal={isOpenModal2}
              onClose={() => setIsOpenModal2(false)}
            />
          </BoxImage>
          <Box p={2}>
            <Typography paragraph variant="caption" color="#282C3899">25 March 2024</Typography>
            <Typography variant="body2">
              “Thanks to networking on HeyGrik, I was able to find the most interesting sisterhood at the university for
              myself. There's no limit to my happiness!!!
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} lg={3.6} border={2} borderColor="primary" borderRadius={4}
              sx={{ mx: 2, mb: 6 }}>
          <BoxImage img={Story3_img} height={440}>
            <Box component="img" src={Play_icon} alt="Play_icon" position="absolute" bottom={15} right={15}
                 sx={{ cursor: 'pointer'}} onClick={() => setIsOpenModal(true)}
            />
            <ModalComponent
              url='https://www.youtube.com/watch?v=x3lypVnJ0HM&ab_channel=MemeableData'
              isOpenModal={isOpenModal}
              onClose={() => setIsOpenModal(false)}
            />
          </BoxImage>
          <Box p={2}>
            <Typography paragraph variant="caption" color="#282C3899">15 April 2024</Typography>
            <Typography variant="body2">
              “HeyGreek truly brings people together... We met at a shared experience, something like a rock concert,
              and after 2 months, he proposed to me. Can you believe it?...
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};

export const BoxImage = styled(Box)(({ img, height, repeat, theme }) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: repeat ? 'auto' : 'cover',
  height: height,
  position: 'relative',
  borderTopRightRadius: 15,
  borderTopLeftRadius: 15
}));
