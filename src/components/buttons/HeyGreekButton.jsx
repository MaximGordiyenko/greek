import { Button, Typography, styled, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const HeyGreekButton = ({ link, fullWidth, mt }) => {
  return (
    <ButtonCSS
      sx={{
        border: 1.5,
        borderRadius: 1,
        borderColor: '#282C38',
        background: '#FFB800',
        marginTop: mt
      }}
      fullWidth={fullWidth}
      variant="contained">
      <LinkCSS to={link}>
        <Typography
          variant="h5"
          sx={{
            color: '#282C38',
            fontWeigh: 400,
            fontSize: 14,
            lineHeight: 1.6,
            letterSpacing: 1.5
          }}>
          Learn more
        </Typography>
      </LinkCSS>
    </ButtonCSS>
  );
};


const ButtonCSS = styled(Button)(({ theme }) => ({
  transition: 'transform 1s ease-in-out',
  '&:hover': {
    opacity: 0.9,
    backgroundColor: '#FFB800',
    transform: 'translateY(-4px)',
    transition: 'transform 1s ease'
  }
}));

export const LinkCSS = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
}));
