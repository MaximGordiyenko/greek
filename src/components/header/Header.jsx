import { useState } from "react";

import { AppBar, IconButton, Container, Box, Drawer, Divider, Typography, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { HeaderLogoIcon } from '../../Icons/HeaderLogoIcon.jsx';
import { Logo } from '../../Logos/Logo.jsx';
import { Navigation } from './Navigation.jsx';
import { HeyGreekButton } from '../buttons/HeyGreekButton.jsx';
import Apple_logo from '../../assets/Apple_logo.webp';
import PlayMarketLogo from '../../assets/PlayMarketLogo.webp';

export const Header = () => {
  const pages = ['Home', 'Dating', 'Networking', 'Tech', 'About'];
  const [open, setState] = useState(false);
  
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  
  return (
    <AppBar position="static" sx={{ color: '#000', background: '#fafafa' }}>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
        <Logo/>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Navigation
            pages={pages}
            fontSize={16}
            fontWeight={500}
            color="#282C3880"
            isDivider={false}
          />
        </Box>
        
        <IconButton
          edge="end"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            mr: 2,
            p: 0,
            display: {
              xs: "flex",
              sm: "none"
            }
          }}>
          <MenuIcon/>
        </IconButton>
        
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          anchor="top">
          <Box height="100%" overflow="hidden">
            <Box display="flex" alignItems="center" alignContent="center" justifyContent="space-between" p={3}>
              <HeaderLogoIcon sx={{ display: { xs: 'flex' } }}/>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon fontSize="large"/>
              </IconButton>
            </Box>
            
            <Divider sx={{ mb: 1 }}/>
            
            <Navigation
              pages={pages}
              fontSize={32}
              fontWeight={500}
              color="#282C3880"
              isDivider={true}
            />
            
            <Grid item container xs={12} display="flex" justifyContent="center" alignItems="center" bgcolor="#FBBC04" py={26} px={2}>
              <Grid item xs={10} my={2}>
                <HeyGreekButton link="https://apple.com" caption="Download on the" icon={Apple_logo}>
                  App Store
                </HeyGreekButton>
              </Grid>
              <Grid item xs={10} my={2}>
                <HeyGreekButton link="https://google.com" caption="Get it on" icon={PlayMarketLogo}>
                  Google Play
                </HeyGreekButton>
              </Grid>
            </Grid>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};
