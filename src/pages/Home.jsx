import '../styles/main.css';
import { Component } from 'react';
import Nav from '../components/blocks/Nav';
import Banner from '../components/blocks/Banner';
import ContentNews from '../components/blocks/news/ContentNews';
import ContentBelow from '../components/blocks/news/ContentBelow';
import Footer from '../components/blocks/Footer';

export default class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <Banner />
        <ContentNews />
        <ContentBelow />
        <Footer />
      </>
    );
  }
}
