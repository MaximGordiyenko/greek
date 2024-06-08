import { HomePage } from './pages/Home-page/HomePage.jsx';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Layout } from './components/layouts/Layout.jsx';
import { DatingPage } from './pages/dating-page/DatingPage.jsx';
import { NetworkingPage } from './pages/networking-page/NetworkingPage.jsx';
import { TechPage } from './pages/tech-page/TechPage.jsx';
import { AboutPage } from './pages/about-page/AboutPage.jsx';
import './App.css';
import '../public/fonts.css';

export const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index path="home" element={<HomePage />} />
          <Route path="dating" element={<DatingPage />} />
          <Route path="networking" element={<NetworkingPage />} />
          <Route path="tech" element={<TechPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
