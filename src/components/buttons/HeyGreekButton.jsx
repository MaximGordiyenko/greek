import { Add } from '@mui/icons-material';
import { Button, Typography, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

export const HeyGreekButton = ({ caption, children, onClick, link, icon }) => {
  return (
    <Button
      variant="contained"
      href={link}
      sx={{ border: '1px solid ', background: '#fafafa', color: blue['900'], width: { xs: "100%", lg: 180 } }}
      onClick={onClick}>
      {icon ? <Box component="img" pr={1} src={icon} alt="icon"/> : <Add/>}
      <Box display="flex" flexDirection="column">
        <Typography fontSize={10} align="left">{caption}</Typography>
        <Typography fontSize={14} fontWeight={500} align="left">{children}</Typography>
      </Box>
    </Button>
  );
};
