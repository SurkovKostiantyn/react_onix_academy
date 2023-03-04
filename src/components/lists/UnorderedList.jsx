import { Component } from 'react';
import PropTypes from 'prop-types';

export default class UnorderedList extends Component {
  render() {
    const { className, list, renderItem } = this.props;
    // eslint-disable-next-line no-console
    list.forEach((item) => { console.log(`item: ${typeof item}`); });
    return (
      <ul className={className}>
        {
          list.map((item) => (
            <li key={item.id}>
              {' '}
              {/* тут я не знаю как сделать key */}
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
  // list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  // тут у меня не получается сделать проверку на типы, т.к. в list могут быть разные типы данных
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
