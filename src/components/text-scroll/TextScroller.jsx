import { Typography } from '@mui/material';
import './styles.css';

export const TextScroller = ({ text }) => {
  return (
    <div className="m-scroll">
      <div className="m-scroll__title">
          <Typography fontFamily="WinnerCondExtraBold" fontSize={30} pt={1}>
            {text}
          </Typography>
      </div>
    </div>
  );
};
