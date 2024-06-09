import { TechBehindBlock } from './TechBehindBlock.jsx';
import { PreFooterBlock } from '../../shared/PreFooterBlock.jsx';
import btm_img_1 from '../../assets/btm_img-1.webp';
import { Divider } from '@mui/material';

export const TechPage = () => {
  const head = "Join the HeyGreek Community";
  const body = "Experience the intersection of technology and Greek life by joining HeyGreek today. Connect with like-minded individuals, forge meaningful relationships, and unlock exciting opportunities within our vibrant community.";
  
  return (
    <>
      <Divider />
      <TechBehindBlock/>
      <PreFooterBlock img={btm_img_1} head={head} body={body}/>
    </>
  );
};
