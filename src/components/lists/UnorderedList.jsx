import { Component } from 'react';
import PropTypes from 'prop-types';

export default class UnorderedList extends Component {
  render() {
    const {
      className, list, renderItem
    } = this.props;
    return (
      <ul className={className}>
        {
          list.map((item) => (
            <li key={item.key}>
              {renderItem(item)}
            </li>
          ))
        }
      </ul>
    );
  }
}

UnorderedList.defaultProps = {
  className: '',
};

UnorderedList.propTypes = {
  className: PropTypes.string,
  renderItem: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })).isRequired,
};
