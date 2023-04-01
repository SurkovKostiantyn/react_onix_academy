import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Link from '../links/Link';
import UnorderedList from '../lists/UnorderedList';

const linksListObjectsNav = [
  {
    id: 0, href: '/', className: 'navbar-menu-item hoverable active', innerHTML: 'Home', key: nanoid()
  },
  {
    id: 1, href: '/news', className: 'navbar-menu-item hoverable', innerHTML: 'News', key: nanoid()
  },
  {
    id: 2, href: '/Customers', className: 'navbar-menu-item hoverable', innerHTML: 'Customers', key: nanoid()
  }
];

export default class Nav extends Component {
  render() {
    const { isInView } = this.props;
    const navClass = `navbar${isInView ? ' navOpacity' : ''}`;
    return (
      <nav className={navClass} id="navbar">
        <Link href="/" className="navbar-logo hoverable" innerHTML="RUNO" />
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
