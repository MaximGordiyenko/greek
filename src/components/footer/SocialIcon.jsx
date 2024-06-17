import { BoxCSS } from './ui.styles.js';

export const SocialIcon = ({src, alt}) => {
  return (
    <BoxCSS component="img" src={src} alt={alt}/>
  );
};
