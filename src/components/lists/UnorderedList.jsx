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
              {/* тут я не знаю как задать key, с генераторами не вышло (nanoid)  */}
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
  // не выходит выполнить чек на типы, т.к. в list приходят объекты у которых могут быть разные проперти
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
