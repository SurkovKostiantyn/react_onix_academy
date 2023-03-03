import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { className, innerHTML, onClick } = this.props;

    return (
      <button type="button" className={className} onClick={onClick}>
        {innerHTML}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  className: PropTypes.string,
  innerHTML: PropTypes.string.isRequired,
  onClick: PropTypes.string
};
