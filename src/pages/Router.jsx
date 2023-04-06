import { Outlet } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import Footer from '../components/blocks/Footer';
import ThemeContext from '../components/context/ThemeContext';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false,
      theme: false
    };
    this.BannerRef = React.createRef();
    this.toggleTheme = this.toggleTheme.bind(this);
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
    this.toggleTheme();
  }

  toggleTheme() {
    this.setState((prevState) => ({
      theme: !prevState.theme
    }));
  }

  render() {
    const { isInView, theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <Nav isInView={isInView} toggleTheme={this.toggleTheme} />
        <Banner refProp={this.BannerRef} />
        <Outlet />
        <Footer />
      </ThemeContext.Provider>
    );
  }
}
