import '../styles/main.css';
import React, { Component } from 'react';
import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import ApiBlock from '../components/blocks/ApiBlock';
import ContentNews from '../components/blocks/news/ContentNews';
import ContentBelow from '../components/blocks/news/ContentBelow';
import Footer from '../components/blocks/Footer';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isInView: false,
    };
    this.BannerRef = React.createRef();
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
      this.BannerRef.current
    );
  }

  render() {
    const { isInView } = this.state;
    return (
      <>
        <Nav isInView={isInView} />
        <Banner refProp={this.BannerRef} />
        <ContentNews />
        <ContentBelow />
        <ApiBlock />
        <Footer />
      </>
    );
  }
}
