import { Component } from 'react';
import PropTypes from 'prop-types';

const defaultImage = 'https://via.placeholder.com/310x280';

export default class Image extends Component {
  onImageLoad = () => {
  };

  onImageError = (event) => {
    const e = event;
    // console.log(e.target);
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
        onLoad={this.onImageLoad}
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
