import { HeaderLogoIcon } from '../Icons/HeaderLogoIcon.jsx';
import { Box, Typography } from '@mui/material';

export const Logo = () => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}>
      <HeaderLogoIcon className="display: flex"/>
      <Box sx={{ width: 100 }}>
        <Typography
          variant="caption"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'flex' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}>
          Made for the Greeks
          by Greeks
        </Typography>
      </Box>
    </Box>
  );
};
