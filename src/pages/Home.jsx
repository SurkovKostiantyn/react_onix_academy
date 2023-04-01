import '../styles/main.css';
import React, { Component } from 'react';
import ContentNews from '../components/blocks/news/ContentNews';
import ContentBelow from '../components/blocks/news/ContentBelow';

export default class Home extends Component {
  render() {
    return (
      <>
        <ContentNews />
        <ContentBelow />
      </>
    );
  }
}
