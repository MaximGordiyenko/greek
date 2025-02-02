import { ListItemButton, ListItemText, Typography, styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = ({ pages, fontSize, fontWeight, isDivider, onMenuItemClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <>
      {pages?.map((page) => {
        const pagePath = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
        const isActive = currentPath === pagePath;
        
        return (
          <ListItemButtonCSS
            key={page}
            divider={isDivider}
            selected={isActive}
            component={Link}
            onClick={onMenuItemClick}
            sx={{ background: 'transparent', py: { xs: 1, lg: 2 }, pl: { xs: 4, sm: 2, md: 2, lg: 2 } }}
            to={pagePath}>
            <ListItemText
              primary={
                <Typography
                  sx={{ color: isActive ? '#03237A' : '#282C3880' }}
                  fontSize={fontSize}
                  fontWeight={fontWeight}>
                  {page}
                </Typography>
              }
            />
          </ListItemButtonCSS>
        );
      })}
    </>
  );
};

const ListItemButtonCSS = styled(ListItemButton)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: 'transparent', // Remove the clicked effect
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#FAFAFA',
  },
  '&:hover': {
    backgroundColor: '#dfeaf6e8', // Change color on hover
    color: 'transparent', // Change text color on hover if needed
  },
}));
