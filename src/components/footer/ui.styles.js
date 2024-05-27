import { styled, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';

export const GridCSS = styled(Grid)(({ theme }) => ({
  background: blue['900']
}));

export const LinkCSS = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[100]
}));
