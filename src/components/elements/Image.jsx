import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { src, className, alt } = this.props;
    // TODO need to add error handling
    return (
      <img src={src} className={className} alt={alt} />
    );
  }
}

Image.defaultProps = {
  alt: 'image',
  className: '',
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};
