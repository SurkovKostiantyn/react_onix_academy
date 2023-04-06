import { Outlet } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import Footer from '../components/blocks/Footer';
import TestContext from '../components/context/TestContext';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false,
      myContext: this.context
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
    const { isInView, myContext } = this.state;
    console.log('Layout: myContext = ', myContext);
    return (
      <TestContext.Provider value={myContext}>
        <Nav isInView={isInView} />
        <Banner refProp={this.BannerRef} />
        <Outlet />
        <Footer />
      </TestContext.Provider>
    );
  }
}
