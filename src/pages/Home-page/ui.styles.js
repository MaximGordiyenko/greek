import { Container, Grid, Box, styled } from "@mui/material";

export const BackgroundGrid = styled(Grid)(({ img, repeat, theme, width, height, border }) => ({
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.up('xs')]: {
    backgroundImage: `url(${img})`,
    backgroundSize: repeat ? 'auto' : 'cover',
    height: height ? height : 'auto',
    width: width ? width : 'auto',
    border: border ? "1px solid black" : 'none',
  },
  [theme.breakpoints.up('sm')]: {
    backgroundImage: `url(${img})`,
    backgroundSize: repeat ? 'auto' : 'cover',
    height: height ? height : 'auto',
    width: width ? width : 'auto',
    border: border ? border : 'none',
  },
  [theme.breakpoints.up('md')]: {
    backgroundImage: `url(${img})`,
    backgroundSize: repeat ? 'auto' : 'cover',
    height: height ? height : 'auto',
    width: width ? width : 'auto',
    border: border ? border : 'none',
  },
  [theme.breakpoints.up('lg')]: {
    backgroundImage: `url(${img})`,
    backgroundSize: repeat ? 'auto' : 'cover',
    height: height ? height : 'none',
    width: width ? width : 'auto',
    border: border ? "1px solid black" : 'none',
  },
}));

export const Wrapper = styled(Grid)(({ theme }) => ({
  background: theme.palette.common.white
}));
