import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { HeaderLevel, className, text } = this.props;
    return (
      <HeaderLevel className={className}>{text}</HeaderLevel>
    );
  }
}

Header.defaultProps = {
  HeaderLevel: 'h4',
  className: '',
};

Header.propTypes = {
  HeaderLevel: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};
