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
            sx={{ background: 'transparent', py: { xs: 1, lg: 2 }, pl: { xs: 4, sm: 2, md: 2, lg: 2 } }}
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
