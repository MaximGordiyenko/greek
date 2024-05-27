import { BackgroundGrid } from '../Home-page/ui.styles.js';
import { Grid } from '@mui/material';
import Mosaic_1 from '../../assets/Mosaic_1.webp';
import Mosaic_2 from '../../assets/Mosaic_2.webp';
import Mosaic_3 from '../../assets/Mosaic_3.webp';
import Mosaic_4 from '../../assets/Mosaic_4.webp';
import Mosaic_6 from '../../assets/Mosaic_6.webp';
import Mosaic_7 from '../../assets/Mosaic_7.webp';
import Mosaic_8 from '../../assets/Mosaic_8.webp';
import Mosaic_9 from '../../assets/Mosaic_9.webp';

export const Galleria = () => {
  return (
    <Grid item container>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_1} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_2} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_3} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_4} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_6} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_6} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_7} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_8} border={1}/>
      <BackgroundGrid item xs={12} sm={12} md={6} lg={4} width={480} height={300} img={Mosaic_9} border={1}/>
    </Grid>
  );
};
