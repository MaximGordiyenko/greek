import { Container, Grid, Box, styled } from "@mui/material";

export const BackgroundGrid = styled(Grid)(({ img, height, repeat, theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.up('xs')]: {
    backgroundImage: `url(${img})`,
    backgroundSize: repeat ? 'auto' : 'cover',
    height: height,
  },
  [theme.breakpoints.up('sm')]: {
    backgroundImage: `url(${img})`,
    backgroundSize: repeat ? 'auto' : 'cover',
    height: height,
  },
  [theme.breakpoints.up('md')]: {
    backgroundImage: `url(${img})`,
    backgroundSize: repeat ? 'auto' : 'cover',
    height: height,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundImage: `url(${img})`,
    backgroundSize: repeat ? 'auto' : 'cover',
    height: height,
  },
}));

export const BoxCSS = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main
}));
