import { Box, Typography } from '@mui/material';
import { BackgroundGrid } from './ui.styles.js';

import { IconButton } from '../../components/buttons/IconButton.jsx';

import Hero_BG from '../../assets/Hero_BG.svg';
import Hey_greek_white from '../../assets/Hey_greek_white.svg';
import AppleLogo from '../../assets/AppleLogo.svg';
import PlayMarketLogo from '../../assets/PlayMarketLogo.svg';

export const LifeStyleAppBlock = () => {
  return (
    <BackgroundGrid item xs={12} sm={12} md={12} lg={12} img={Hero_BG}>
      <Box textAlign="center" width={500} mx="auto" sx={{ mt: { xs: 80, lg: 50 } }}>
        <Box component="img" src={Hey_greek_white} alt="Hey_greek_white"/>
        <Typography variant="h2">Ultimate Greek Lifestyle App</Typography>
        <Typography variant="body1">Worlds First Dating App Made For The Greeks By Greeks!</Typography>
        <IconButton link="https://apple.com" caption="Download on the" icon={AppleLogo}>App Store</IconButton>
        <IconButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>Google Play</IconButton>
      </Box>
    </BackgroundGrid>
  );
};
