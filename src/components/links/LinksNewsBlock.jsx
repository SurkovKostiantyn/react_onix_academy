import { Component } from 'react';
import Image from '../elements/Image';
import Text from '../elements/Text';

export default class LinksNewsBlock extends Component {
  render() {
    const { href, className, itemsList } = this.props;

    return (
      <a href={href} className={className}>
        <Image src={itemsList.img} alt={itemsList.img.replace(/(\.img)|(\.png)|(\.jpg)|(\.jpeg)|(\.svg)/g, '')} />
        <Text className="date" text={itemsList.date} />
        <Text className="title" text={itemsList.title} />
        <Text className="text" text={itemsList.text} />

      </a>
    );
  }
}
