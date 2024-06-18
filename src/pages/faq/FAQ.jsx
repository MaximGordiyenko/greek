import Pattern_Asterisk from '../../assets/Pattern_Asterisk.webp';
import { BackgroundGrid } from '../home-page/ui.styles.js';
import { Divider, Grid, Typography } from '@mui/material';
import { AccordionComponent } from '../../components/accordion/Accordion.jsx';

export const FAQ = () => {
  const leftSide = [
    {
      id: 0,
      title: 'Elementum tempor sed sit?',
      content: `Donec non augue ut ut. Sit pharetra sit quis sit vel sed odio turpis est. Adipiscing eleifend feugiat
              mattis massa eu amet. Ultrices sit tincidunt sed in hendrerit ut sollicitudin leo et. Netus ultricies
              consequat sit sed enim amet sapien. Vitae sed sem eget morbi magna urna. Non amet sed euismod cursus id.
              Nulla quam turpis sit sit tincidunt. Gravida donec id posuere sed sit donec consectetur nisi lobortis. Sem
              suspendisse elit libero velit. In massa suscipit sollicitudin feugiat quis viverra faucibus mi.
              `
    }, {
      id: 1,
      title: 'Massa in elit diam risus est',
      content: `Donec non augue ut ut. Sit pharetra sit quis sit vel sed odio turpis est. Adipiscing eleifend feugiat
              mattis massa eu amet. Ultrices sit tincidunt sed in hendrerit ut sollicitudin leo et. Netus ultricies
              consequat sit sed enim amet sapien. Vitae sed sem eget morbi magna urna. Non amet sed euismod cursus id.
              Nulla quam turpis sit sit tincidunt. Gravida donec id posuere sed sit donec consectetur nisi lobortis. Sem
              suspendisse elit libero velit. In massa suscipit sollicitudin feugiat quis viverra faucibus mi.
              `
    }, {
      id: 2,
      title: 'Volutpat duis nulla',
      content: `Donec non augue ut ut. Sit pharetra sit quis sit vel sed odio turpis est. Adipiscing eleifend feugiat
              mattis massa eu amet. Ultrices sit tincidunt sed in hendrerit ut sollicitudin leo et. Netus ultricies
              consequat sit sed enim amet sapien. Vitae sed sem eget morbi magna urna. Non amet sed euismod cursus id.
              Nulla quam turpis sit sit tincidunt. Gravida donec id posuere sed sit donec consectetur nisi lobortis. Sem
              suspendisse elit libero velit. In massa suscipit sollicitudin feugiat quis viverra faucibus mi.
              `
    }
  ];
  const rightSide = [
    {
      id: 0,
      title: 'Et gravida scelerisque',
      content: `Donec non augue ut ut. Sit pharetra sit quis sit vel sed odio turpis est. Adipiscing eleifend feugiat
              mattis massa eu amet. Ultrices sit tincidunt sed in hendrerit ut sollicitudin leo et. Netus ultricies
              consequat sit sed enim amet sapien. Vitae sed sem eget morbi magna urna. Non amet sed euismod cursus id.
              Nulla quam turpis sit sit tincidunt. Gravida donec id posuere sed sit donec consectetur nisi lobortis. Sem
              suspendisse elit libero velit. In massa suscipit sollicitudin feugiat quis viverra faucibus mi.
              `
    }, {
      id: 1,
      title: 'Ut tempus congue purus sed',
      content: `Donec non augue ut ut. Sit pharetra sit quis sit vel sed odio turpis est. Adipiscing eleifend feugiat
              mattis massa eu amet. Ultrices sit tincidunt sed in hendrerit ut sollicitudin leo et. Netus ultricies
              consequat sit sed enim amet sapien. Vitae sed sem eget morbi magna urna. Non amet sed euismod cursus id.
              Nulla quam turpis sit sit tincidunt. Gravida donec id posuere sed sit donec consectetur nisi lobortis. Sem
              suspendisse elit libero velit. In massa suscipit sollicitudin feugiat quis viverra faucibus mi.
              `
    }, {
      id: 2,
      title: 'Aliquam fermentum risus',
      content: `Donec non augue ut ut. Sit pharetra sit quis sit vel sed odio turpis est. Adipiscing eleifend feugiat
              mattis massa eu amet. Ultrices sit tincidunt sed in hendrerit ut sollicitudin leo et. Netus ultricies
              consequat sit sed enim amet sapien. Vitae sed sem eget morbi magna urna. Non amet sed euismod cursus id.
              Nulla quam turpis sit sit tincidunt. Gravida donec id posuere sed sit donec consectetur nisi lobortis. Sem
              suspendisse elit libero velit. In massa suscipit sollicitudin feugiat quis viverra faucibus mi.
              `
    }
  ];
  return (
    <>
      <Divider sx={{ width: '100%', borderColor: '#aaa' }}/>
      <BackgroundGrid container img={Pattern_Asterisk} height="100%" repeat>
        
        <Typography variant="h2" sx={{ fontSize: { xs: 40 } }} py={10} mx="auto">
          FAQ
        </Typography>
        
        <Grid item xs={12} sm={12} md={12} lg={12} pb={16} sx={{ mx: { xs: 4, lg: 20} }}>
          
          <Grid item container spacing={2} justifyContent="space-evenly">
            <Grid item xs={12} sm={8} md={6} lg={5.5}>
              {leftSide.map(el => <AccordionComponent key={el.id} title={el.title} children={el.content}/>)}
            </Grid>
            
            <Grid item xs={12} sm={8} md={6} lg={5.5}>
              {rightSide.map(el => <AccordionComponent key={el.id} title={el.title} children={el.content}/>)}
            </Grid>
          </Grid>
        
        </Grid>
        
      </BackgroundGrid>
    </>
  );
};
