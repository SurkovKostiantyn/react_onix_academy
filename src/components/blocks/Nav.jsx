import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '../links/Link';
import UnorderedList from '../lists/UnorderedList';
import TestContext from '../context/TestContext';
import Button from '../elements/Button';

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
    const { isInView } = this.props;
    const navClass = `navbar${isInView ? ' navOpacity' : ''}`;
    return (
      <nav className={navClass} id="navbar">
        <Link href="/" className="navbar-logo hoverable" innerHTML="RUNO" />
        <TestContext.Consumer>
          {(value) => (
            <Button
              className="navbar-menu-button"
              innerHTML={
                value ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />
              }
              onClick={() => {
                // eslint-disable-next-line no-param-reassign
                value = !value;
                console.log(value);
              }}
            />
          )}
        </TestContext.Consumer>
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
