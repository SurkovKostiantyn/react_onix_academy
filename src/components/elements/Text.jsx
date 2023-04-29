import PropTypes from 'prop-types';

function Text({ className, text }) {
  return <p className={className}>{text}</p>;
}

Text.defaultProps = {
  className: '',
  text: '',
};

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.node,
};

export default Text;
