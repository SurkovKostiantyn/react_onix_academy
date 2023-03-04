import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Text extends Component {
  render() {
    const { className, text } = this.props;
    return (
      <p className={className}>{text}</p>
    );
  }
}

Text.defaultProps = {
  className: '',
  text: '',
};

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
