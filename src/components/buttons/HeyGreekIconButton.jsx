import { Add } from '@mui/icons-material';
import { Button, Typography, Box, styled } from '@mui/material';
import { blue } from '@mui/material/colors';

export const HeyGreekIconButton = ({ caption, children, onClick, icon, link, background, color }) => {
  return (
    <ButtonCSS
      sx={{
        border: '1px solid ', background: background ? background : '#fafafa',
        color: color ? color : blue['900'],
        width: '100%', px: 1
      }}
      background={background}
      onClick={onClick}
      href={link}
      variant="contained">
      {icon ? <Box lineHeight="normal" pr={2}>{icon}</Box> : <Add/>}
      <Box display="flex" flexDirection="column">
        <Typography sx={{ fontSize: { xs: 8, lg: 10 } }} align="left">{caption}</Typography>
        <Typography sx={{ fontSize: { xs: 13, lg: 17 } }} fontWeight={900} align="left">{children}</Typography>
      </Box>
    </ButtonCSS>
  );
};

const ButtonCSS = styled(Button)(({ theme, background }) => ({
  transition: 'transform 1s ease-in-out',
  '&:hover': {
    backgroundColor: background ? background : '#FAFAFA',
    opacity: 0.9,
    transform: 'translateY(-4px)',
    transition: 'transform 1s ease'
  }
}));
