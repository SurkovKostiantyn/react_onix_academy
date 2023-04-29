import PropTypes from 'prop-types';

function Link({ href, className, innerHTML }) {
  return (
    <a href={href} className={className}>
      {innerHTML}
    </a>
  );
}

Link.defaultProps = {
  className: '',
  innerHTML: '',
  href: null
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  innerHTML: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Link;
