import { Button, Typography, styled } from '@mui/material';

export const HeyGreekButton = ({ fullWidth, mt }) => {
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
    </ButtonCSS>
  );
};


const ButtonCSS = styled(Button)(({ theme }) => ({
  transition: 'transform 1s ease-in-out',
  '&:hover': {
    opacity: 0.9,
    backgroundColor: '#FFB800',
    transform: 'translateY(-4px)',
    transition: 'transform 1s ease',
  },
}));
