import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from '../links/Link';
import UnorderedList from '../lists/UnorderedList';
import Button from '../elements/Button';
import ThemeContext from '../context/ThemeContext';

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
];

function Nav({ isInView, toggleTheme }) {
  const navClass = `navbar${isInView ? ' navOpacity' : ''}`;

  const theme = useContext(ThemeContext);

  return (
    <nav className={navClass} id="navbar">
      <Link href="/" className="navbar-logo hoverable" innerHTML="RUNO" />
      <Button
        className={theme ? 'navbar-menu-button' : 'navbar-menu-button dark'}
        onClick={toggleTheme}
      >
        <i className={`fas ${theme ? 'fa-sun' : 'fa-moon'}`} />
      </Button>
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

Nav.propTypes = {
  isInView: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default Nav;
