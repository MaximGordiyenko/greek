import { Button, Typography } from '@mui/material';

export const HeyGreekButton = ({ fullWidth, mt }) => {
  return (
    <Button
      sx={{
        border: 1,
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
    </Button>
  );
};
