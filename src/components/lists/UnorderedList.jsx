import { Component } from 'react';
import PropTypes from 'prop-types';

export default class UnorderedList extends Component {
  render() {
    const { className, list, renderItem } = this.props;
    return (
      <ul className={className}>
        {
                    list.map((item) => (
                      <li key={item}>
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
  renderItem: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
