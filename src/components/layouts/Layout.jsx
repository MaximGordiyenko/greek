import { useOutlet } from 'react-router-dom';

import { Header } from '../header/Header.jsx';

import { Footer } from '../footer/Footer.jsx';

export const Layout = () => {
  const outlet = useOutlet();
  
  return (
    <>
      <Header/>
      {outlet}
      <Footer/>
    </>
  );
};
