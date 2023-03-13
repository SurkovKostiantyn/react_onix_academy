import { Component } from 'react';
import PropTypes from 'prop-types';

const defaultImage = 'https://via.placeholder.com/310x280';

export default class Image extends Component {
  onImageError = (event) => {
    const e = event;
    e.target.src = defaultImage;
  };

  render() {
    const { src, className, alt } = this.props;

    // TODO need to add error handling
    return (
      <img
        src={src || defaultImage}
        className={className}
        alt={alt}
        onError={this.onImageError}
      />
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
