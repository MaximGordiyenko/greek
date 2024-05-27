import { BackgroundGrid } from '../Home-page/ui.styles.js';
import { Grid } from '@mui/material';
import Dating_omg from '../../assets/Dating_omg.svg';
import Connecting_img from '../../assets/Connecting_img.svg';

export const Galleria = () => {
  return (
    <Grid item container>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Dating_omg} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Dating_omg} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Connecting_img} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Connecting_img} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Connecting_img} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Connecting_img} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Connecting_img} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Connecting_img} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Connecting_img} border={1}/>
    </Grid>
  );
};
