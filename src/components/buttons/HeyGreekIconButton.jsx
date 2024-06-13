import { Add } from '@mui/icons-material';
import { Button, Typography, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

export const HeyGreekIconButton = ({ caption, children, onClick, icon, link, background, color }) => {
  return (
    <Button
      variant="contained"
      href={link}
      sx={{
        border: '1px solid ', background: background ? background : '#fafafa', color: color ? color : blue['900'],
        width: '100%', px: 1
      }}
      onClick={onClick}>
      {icon ? <Box lineHeight="normal" pr={2}>{icon}</Box> : <Add/>}
      <Box display="flex" flexDirection="column">
        <Typography sx={{ fontSize: { xs: 8, lg: 10 } }} align="left">{caption}</Typography>
        <Typography sx={{ fontSize: { xs: 13, lg: 17 } }} fontWeight={900} align="left">{children}</Typography>
      </Box>
    </Button>
  );
};
