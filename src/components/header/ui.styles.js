import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton'; // Ensure ListItemButton is imported

export const ListItemButtonCSS = styled(ListItemButton)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: '#2e8b57',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#2e8b57',
  },
  '&:hover': {
    backgroundColor: '#2e8b57',
  },
}));
