import { Component } from 'react';
import Link from '../links/Link';
import UnorderedList from '../lists/UnorderedList';

const linksListObjectsNav = [
  {
    id: 0, href: 'index.html', className: 'navbar-menu-item hoverable active', innerHTML: 'Home' 
  },
  {
    id: 1, href: 'news.html', className: 'navbar-menu-item hoverable', innerHTML: 'News' 
  }
];

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false,
    };
  }

  render() {
    const { isInView } = this.state;

    const navClass = `navbar${isInView ? ' navbar--scrolled' : ''}`;

    return (
      <nav className={navClass} id="navbar">
        <Link href="https://index.html" className="navbar-logo hoverable" innerHTML="RUNO" />
        <UnorderedList
          list={linksListObjectsNav}
          className="navbar-menu"
          renderItem={({ href, className, innerHTML }) => (
            <Link
              href={href}
              className={className}
              innerHTML={innerHTML}
            />
          )}
        />
      </nav>
    );
  }
}
