import { ListItemButton, ListItemText, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = ({ pages, fontSize, fontWeight, isDivider }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <>
      {pages?.map((page) => {
        const pagePath = `/${page.toLowerCase()}`;
        const isActive = currentPath === pagePath;
        
        return (
          <ListItemButton
            key={page}
            divider={isDivider}
            selected={isActive}
            component={Link}
            sx={{ background: 'none', py: { xs: 3, lg: 2 }, pl: { xs: 4, lg: 2 } }}
            to={`/${page.toLowerCase()}`}>
            <ListItemText
              primary={
                <Typography
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                  sx={{ color: isActive ? '#03237A' : '#282C3880' }}>
                  {page}
                </Typography>
              }
            />
          </ListItemButton>
        );
      })}
    </>
  );
};
