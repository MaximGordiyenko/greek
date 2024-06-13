import { useState } from "react";

import { AppBar, IconButton, Container, Box, Drawer, Divider, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { HeaderLogoIcon } from '../../Icons/HeaderLogoIcon.jsx';
import { Logo } from '../../Logos/Logo.jsx';
import { Navigation } from './Navigation.jsx';
import { HeyGreekIconButton } from '../buttons/HeyGreekIconButton.jsx';
import { AppleStoreIcon } from '../icons/AppleStoreIcon.jsx';
import { GooglePlayMarketIcon } from '../icons/GooglePlayMarketIcon.jsx';

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
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
            
            <Divider/>
            
            <Navigation
              pages={pages}
              fontSize={30}
              fontWeight={500}
              color="#282C3880"
              isDivider={true}
            />
            
            <Grid item container xs={12} justifyContent="center" alignItems="center" bgcolor="#FBBC04"
                  px={2} py={6}>
              <Grid item xs={10} sm={4} md={4} lg={6} my={2}>
                <HeyGreekIconButton link="https://apple.com" caption="Download on the"
                                    icon={<AppleStoreIcon color="#03237A"/>}>
                  App Store
                </HeyGreekIconButton>
              </Grid>
              <Grid item xs={10} sm={4} md={4} lg={6} my={2}>
                <HeyGreekIconButton link="https://google.com" caption="Get it on"
                                    icon={<GooglePlayMarketIcon color="#03237A"/>}>
                  Google Play
                </HeyGreekIconButton>
              </Grid>
            </Grid>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};
