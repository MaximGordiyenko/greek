import { styled, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const GridCSS = styled(Grid)(({ theme }) => ({
  background: "#03237A"
}));

export const LinkCSS = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[100]
}));
