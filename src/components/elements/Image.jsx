import { Component } from 'react';

export default class Image extends Component {
  render() {
    const { src, className, alt } = this.props;
    return (
      <img src={src} className={className} alt={alt} />
    );
  }
}
