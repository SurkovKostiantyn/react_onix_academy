import { Outlet } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import Footer from '../components/blocks/Footer';
import ThemeContext from '../components/context/ThemeContext';

export default function Layout() {
  const [isInView, setIsInView] = useState(false);
  const [theme, setTheme] = useState(false);
  const bannerRef = useRef();

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const callback = ([entry]) => {
      const { isIntersecting } = entry;
      setIsInView(!isIntersecting);
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(bannerRef.current);
    toggleTheme();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <Nav isInView={isInView} toggleTheme={toggleTheme} />
      <Banner refProp={bannerRef} />
      <Outlet />
      <Footer />
    </ThemeContext.Provider>
  );
}
