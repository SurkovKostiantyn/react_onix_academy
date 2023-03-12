import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Link from '../links/Link';
import UnorderedList from '../lists/UnorderedList';

const linksListObjectsNav = [
  {
    id: 0, href: 'index.html', className: 'navbar-menu-item hoverable active', innerHTML: 'Home', key: nanoid()
  },
  {
    id: 1, href: 'news.html', className: 'navbar-menu-item hoverable', innerHTML: 'News', key: nanoid()
  }
];

export default class Nav extends Component {
  render() {
    const { isInView } = this.props;
    const navClass = `navbar${isInView ? ' navOpacity' : ''}`;
    return (
      <nav className={navClass} id="navbar">
        <Link href="https://index.html" className="navbar-logo hoverable" innerHTML="RUNO" />
        <UnorderedList
          list={linksListObjectsNav}
          className="navbar-menu"
          renderItem={({
            href, className, innerHTML
          }) => (
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

Nav.propTypes = {
  isInView: PropTypes.bool.isRequired
};
