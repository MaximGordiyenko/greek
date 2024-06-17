import { LifeStyleAppBlock } from './LifeStyleAppBlock.jsx';
import { MoreThenDatingBlock } from './MoreThenDatingBlock.jsx';
import { WhyHeyGreekBlock } from './WhyHeyGreekBlock.jsx';
import { SuccessStoriesBlock } from './SuccessStoriesBlock.jsx';
import { FollowInstagramBlock } from './FollowInstagramBlock.jsx';
import { TextScroller } from '../../components/text-scroll/TextScroller.jsx';

export const HomePage = () => {
  return (
    <>
      <LifeStyleAppBlock/>
      
      <TextScroller
        text=" * 1000+ of Greek organisations already part of system * 1000+ of Greek organisations already part of system * 1000+ of Greek organisations already part of system * 1000+ of Greek organisations already part of system *  1000+ of Greek organisations already part of system * "
      />
      
      <MoreThenDatingBlock/>
      
      <WhyHeyGreekBlock/>
      
      <TextScroller
        text=" * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * join heygreek now * "
      />
      
      <SuccessStoriesBlock/>
      
      <FollowInstagramBlock/>
    </>
  );
};
