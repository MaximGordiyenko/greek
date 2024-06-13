import { HeaderLogoIcon } from '../Icons/HeaderLogoIcon.jsx';
import { Box, Typography, Stack, Divider, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Stack
      direction="row" spacing={2} alignItems="center"
      divider={
        <Divider orientation="vertical"
                 sx={{ height: "50%", borderColor: 'black', display: { xs: 'none', lg: 'flex' }, mt: 2 }}/>
      }>
      <Link to='/home'>
        <HeaderLogoIcon className="display: flex"/>
      </Link>
      <Box sx={{ width: 120, display: 'flex', alignItems: 'center' }}>
        <Typography
          paragraph
          href="#app-bar-with-responsive-menu"
          sx={{ m: 0, flexGrow: 1, fontSize: 12, display: { xs: 'none', lg: 'flex' } }}>
          Made for the Greeks by Greeks
        </Typography>
      </Box>
    </Stack>
  );
};

export const DividerCSS = styled(Divider)(({ theme }) => ({}));
