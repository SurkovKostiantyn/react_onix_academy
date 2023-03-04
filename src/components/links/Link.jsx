import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Link extends Component {
  render() {
    const { href, className, innerHTML } = this.props;
    return (
      <a href={href} className={className}>
        {innerHTML}
      </a>
    );
  }
}

Link.defaultProps = {
  className: '',
  innerHTML: '',
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  innerHTML: PropTypes.string,
};
