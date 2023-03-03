import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { headerLevel, className, text } = this.props;
    const Tag = headerLevel || 'h4';
    return (
      <Tag className={className}>{text}</Tag>
    );
  }
}

Header.propTypes = {
  headerLevel: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

Header.defaultProps = {
  headerLevel: 'h4',
  className: '',
};
