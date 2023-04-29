import PropTypes from 'prop-types';
import { useState } from 'react';

const defaultImage = 'https://via.placeholder.com/310x280';

function Image({ src, className, alt }) {
  const [isLoaded, setIsLoaded] = useState(true);

  const onImageError = () => {
    setIsLoaded(false);
  };

  return (
    <img
      src={isLoaded ? src : defaultImage}
      className={className}
      alt={alt}
      onError={onImageError}
      draggable="false"
    />
  );
}

Image.defaultProps = {
  className: '',
  alt: 'image',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
