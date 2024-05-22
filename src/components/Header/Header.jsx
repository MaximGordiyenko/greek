import { useState } from "react";

import { AppBar, IconButton, Container, Box, Drawer, Divider, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { HeaderLogoIcon } from '../../Icons/HeaderLogoIcon.jsx';
import { Logo } from '../../Logos/Logo.jsx';
import { Navigation } from './Navigation.jsx';

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
    <AppBar position="static">
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
        <Logo/>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Navigation pages={pages} isDivider={false} />
        </Box>
        
        <IconButton
          edge="end"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            mr: 2,
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
          <Box height="100vh" px={3}>
            <Box display="flex" alignItems="center" alignContent="center" justifyContent="space-between" py={3}>
              <HeaderLogoIcon sx={{ display: { xs: 'flex', md: 'flex' } }}/>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon fontSize="large"/>
              </IconButton>
            </Box>
            
            <Divider sx={{ mb: 1 }}/>
            
            <Navigation pages={pages} isDivider={true}/>
            
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};
