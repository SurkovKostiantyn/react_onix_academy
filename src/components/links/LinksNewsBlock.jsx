import { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../elements/Image';
import Text from '../elements/Text';

export default class LinksNewsBlock extends Component {
  render() {
    const {
      href, className, itemsList, draggable, onDragStart, onDragEnd, onDragEnter, style
    } = this.props;

    return (
      <a
        href={href}
        className={className}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnter={onDragEnter}
        onDragEnd={onDragEnd}
        style={style}
      >
        <Image src={itemsList.img} alt={itemsList.img.replace(/(\.img)|(\.png)|(\.jpg)|(\.jpeg)|(\.svg)/g, '')} />
        <Text className="date" text={itemsList.date} />
        <Text className="title" text={itemsList.title} />
        <Text className="text" text={itemsList.text} />
      </a>
    );
  }
}

LinksNewsBlock.defaultProps = {
  className: '',
  href: '#',
  style: null,
};

LinksNewsBlock.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  itemsList: PropTypes.shape({
    img: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  draggable: PropTypes.bool.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragEnter: PropTypes.func.isRequired,
  style: PropTypes.shape({
    opacity: PropTypes.number,
  })
};
