import { ConnectingGreeksBlock } from './ConnectingGreeksBlock.jsx';
import { EstablishConnectionsBlock } from './EstablishConnectionsBlock.jsx';
import { PreFooterBlock } from '../../shared/PreFooterBlock.jsx';
import btm_img from '../../assets/btm_img.webp';

export const NetworkingPage = () => {
  const head = "Forge Your Own Greek Network and Maximize Your Connections";
  const body = "Unlock the full potential of your connections by creating your own personalized Greek network on HeyGreek. Connect with like-minded individuals, build meaningful relationships, and leverage your network for endless opportunities.";
  
  return (
    <>
      <ConnectingGreeksBlock/>
      <EstablishConnectionsBlock/>
      <PreFooterBlock img={btm_img} head={head} body={body}/>
    </>
  );
};
