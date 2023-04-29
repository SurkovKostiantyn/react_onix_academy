import PropTypes from 'prop-types';

function Header({ headerLevel, className, children }) {
  const Tag = headerLevel;
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}

Header.defaultProps = {
  headerLevel: 'h4',
  className: '',
};

Header.propTypes = {
  headerLevel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Header;
