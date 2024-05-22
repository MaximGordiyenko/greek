import { Add } from '@mui/icons-material';
import { Button, Typography, Box } from '@mui/material';

export const IconButton = ({ caption, children, onClick, link, icon }) => {
  return (
    <Button
      variant="contained"
      href={link}
      sx={{ border: '1px solid ', mx: 1 }}
      onClick={onClick}>
      {icon ? <Box component="img" pr={1} src={icon} alt="icon"/>: <Add/>}
      <Box display="flex" flexDirection="column" width={150}>
        <Typography fontSize={10} align="left">{caption}</Typography>
        <Typography fontSize={14} align="left">{children}</Typography>
      </Box>
    </Button>
  );
};
