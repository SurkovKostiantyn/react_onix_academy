import { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../elements/Image';
import Text from '../elements/Text';

export default class LinksNewsBlock extends Component {
  render() {
    const {
      href, className, itemsList, draggable, onDragStart, onDragEnd, onDragEnter, onDragOver,
    } = this.props;

    return (
      <a
        href={href}
        className={className}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnter={onDragEnter}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <Image
          src={itemsList.download_url}
          alt={itemsList.author}
        />
        <Text className="title" text={itemsList.author} />
      </a>
    );
  }
}

LinksNewsBlock.defaultProps = {
  className: '',
  href: '#',
};

LinksNewsBlock.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  itemsList: PropTypes.shape({
    download_url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  draggable: PropTypes.bool.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
};
