import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navigation = ({ pages, isDivider }) => {
  return (
    <>
      {pages?.map((page) => (
        <ListItemButton key={page} divider={isDivider} component={Link} to={`/${page.toLowerCase()}`}>
          <ListItemText primary={page}/>
        </ListItemButton>
      ))}
    </>
  );
};
