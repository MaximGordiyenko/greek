import { Grid, Box } from '@mui/material';
import Text_line_home_1 from '../../assets/Text_line_home_1.svg';
import { LifeStyleAppBlock } from './LifeStyleAppBlock.jsx';
import { MoreThenDatingBlock } from './MoreThenDatingBlock.jsx';
import { WhyHeyGreekBlock } from './WhyHeyGreekBlock.jsx';

export const HomePage = () => {
  return (
    <Grid container>
      <LifeStyleAppBlock/>
      
      <Box width="100%" component="img" src={Text_line_home_1} alt="driven_line_home_1"/>
      
      <MoreThenDatingBlock/>
      
      <WhyHeyGreekBlock/>
    
    </Grid>
  );
};
