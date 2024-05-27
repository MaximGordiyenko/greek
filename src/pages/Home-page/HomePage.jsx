import { Box } from '@mui/material';
import Text_line_home_1 from '../../assets/Text_line_home_1.webp';
import Text_line_home_2 from '../../assets/Text_line_home_2.webp';
import { LifeStyleAppBlock } from './LifeStyleAppBlock.jsx';
import { MoreThenDatingBlock } from './MoreThenDatingBlock.jsx';
import { WhyHeyGreekBlock } from './WhyHeyGreekBlock.jsx';
import { SuccessStoriesBlock } from './SuccessStoriesBlock.jsx';
import { FollowInstagramBlock } from './FollowInstagramBlock.jsx';

export const HomePage = () => {
  return (
    <>
      <LifeStyleAppBlock/>
      
      <Box width="100%" component="img" src={Text_line_home_1} alt="Text_line_home_1"/>
      
      <MoreThenDatingBlock/>
      
      <WhyHeyGreekBlock/>
      
      <Box width="100%" component="img" src={Text_line_home_2} alt="Text_line_home_2"/>
      
      <SuccessStoriesBlock/>
      
      <FollowInstagramBlock/>
    </>
  );
};
