import { Component } from 'react';
import PropTypes from 'prop-types';

const defaultImage = 'https://via.placeholder.com/310x280';

export default class Image extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: true,
    };
  }

  onImageError = () => {
    this.setState({ isLoaded: false });
  };

  render() {
    const { src, className, alt } = this.props;
    const { isLoaded } = this.state;
    // TODO need to add error handling
    return (
      <img
        src={isLoaded ? src : defaultImage}
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
