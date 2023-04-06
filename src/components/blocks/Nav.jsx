import React, { Component } from 'react';
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

export default class Nav extends Component {
  render() {
    const { isInView, toggleTheme } = this.props;
    const navClass = `navbar${isInView ? ' navOpacity' : ''}`;
    return (
      <nav className={navClass} id="navbar">
        <Link href="/" className="navbar-logo hoverable" innerHTML="RUNO" />
        <ThemeContext.Consumer>
          {(theme) => (
            <Button
              className={theme ? 'navbar-menu-button' : 'navbar-menu-button dark'}
              innerHTML={theme ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
              onClick={toggleTheme}
            />
          )}
        </ThemeContext.Consumer>
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
  isInView: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired
};
