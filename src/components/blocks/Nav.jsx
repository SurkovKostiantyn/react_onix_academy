import { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '../links/Link';
import UnorderedList from '../lists/UnorderedList';

const linksListObjectsNav = [
  {
    key: 0, href: '/', className: 'navbar-menu-item hoverable active', innerHTML: 'Home'
  },
  {
    key: 1, href: '/news', className: 'navbar-menu-item hoverable', innerHTML: 'News'
  },
  {
    key: 2, href: '/Customers', className: 'navbar-menu-item hoverable', innerHTML: 'Customers'
  },
  {
    key: 3, href: null, className: 'navbar-menu-item hoverable', innerHTML: <i className="fa-solid fa-toggle-on" />
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
