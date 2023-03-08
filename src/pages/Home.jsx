import '../styles/main.css';
import React, { Component } from 'react';
import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import ContentNews from '../components/blocks/news/ContentNews';
import ContentBelow from '../components/blocks/news/ContentBelow';
import Footer from '../components/blocks/Footer';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isInView: null,
      BannerRef: React.createRef()
    };
  }

  componentDidMount() {
    const callback = ([entry]) => {
      const { isIntersecting } = entry;
      this.setState({ isInView: !isIntersecting });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(
      this.BannerRef
    );
  }

  render() {
    const { isInView, BannerRef } = this.state;
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
}
