import PropTypes from 'prop-types';

function Button({ className, onClick, children }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  onClick: null
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;
