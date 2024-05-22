import { useState } from "react";
import {
  AppBar, Toolbar, IconButton, Container, Box, Drawer,
  Divider, ListItemButton, ListItemText, Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { HeaderLogoIcon } from '../../Icons/HeaderLogoIcon.jsx';
import { Logo } from '../../Logos/Logo.jsx';

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
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Logo/>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'flex' }}>
                {page}
              </Button>
            ))}
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
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}>
            <Box sx={{ p: 2 }}>
              <HeaderLogoIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}/>
              <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                <CloseIcon/>
              </IconButton>
              
              <Divider sx={{ mb: 2 }}/>
              
              {pages.map((page) => (
                <Box key={page} sx={{ mb: 2 }}>
                  <ListItemButton>
                    <ListItemText primary={page}/>
                  </ListItemButton>
                  <Divider sx={{ mb: 2 }}/>
                </Box>
              ))}
              
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)"
                }}>
                <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                  Register
                </Button>
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                  Login
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
