import { Outlet } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import Footer from '../components/blocks/Footer';

export default class Layout extends Component {
  constructor(props) {
    super(props);
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
        <Outlet />
        <Footer />
      </>
    );
  }
}
