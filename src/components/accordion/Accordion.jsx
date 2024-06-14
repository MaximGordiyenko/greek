import { AccordionSummary, AccordionDetails, Accordion, Typography, styled } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export const AccordionComponent = ({ title, children }) => {
  return (
    <AccordionCSS>
      <AccordionSummary
        expandIcon={<ExpandMore/>}
        aria-controls="panel1-content"
        id="panel1-header">
        <Typography gutterBottom variant="h5" color="#03237A">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography paragraph variant="body2">
          {children}
        </Typography>
      </AccordionDetails>
    </AccordionCSS>
  );
};

export const AccordionCSS = styled(Accordion)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  borderRadius: '0',
  borderTop: '2px solid #282C38',
  '&:first-of-type': {
    borderRadius: '0',
  },
  '&:last-of-type': {
    borderBottom: '2px solid #282C38',
    borderRadius: '0',
  },
}));
