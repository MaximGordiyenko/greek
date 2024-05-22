import { useOutlet } from 'react-router-dom';

import { LayoutContainerCSS } from './layout.styles.js';
import { Header } from '../Header/Header.jsx';

import { Grid } from "@mui/material";

export const Layout = () => {
  const outlet = useOutlet();
  
  return (
    <>
      <Header />
        {outlet}
      <Footer />
    </>
  );
};
