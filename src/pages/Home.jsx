import '../styles/main.css';
import React from 'react';

import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import ContentNews from '../components/blocks/news/ContentNews';
import ContentBelow from '../components/blocks/news/ContentBelow';
import Footer from '../components/blocks/Footer';

export default function Home() {
  const BannerRef = React.createRef();

  let isInView = false;

  const callback = ([entry]) => {
    const { isIntersecting } = entry;
    isInView = !isIntersecting;
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(
    BannerRef.current
  );

  return (
    <>
      <Nav isInView={isInView} />
      <Banner RefProp={BannerRef} />
      <ContentNews />
      <ContentBelow />
      <Footer />
    </>
  );
}
