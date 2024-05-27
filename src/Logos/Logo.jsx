import { HeaderLogoIcon } from '../Icons/HeaderLogoIcon.jsx';
import { Box, Typography, Stack, Divider, styled } from '@mui/material';

export const Logo = () => {
  return (
    <Stack
      direction="row" spacing={2}
      divider={<Divider orientation="vertical" style={{ marginTop: "14px"}} sx={{ height: "50%", borderColor: 'black' }}/>}>
      <HeaderLogoIcon className="display: flex"/>
      <Box sx={{ width: 120, display: 'flex', alignItems: 'center' }}>
        <Typography
          paragraph
          href="#app-bar-with-responsive-menu"
          sx={{ m: 0, flexGrow: 1, fontSize: 12 }}>
          Made for the Greeks by Greeks
        </Typography>
      </Box>
    </Stack>
  );
};

export const DividerCSS = styled(Divider)(({ theme }) => ({}));
