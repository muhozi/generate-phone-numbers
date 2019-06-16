import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Layout = props => {
  const { children } = props;
  return (
    <Fragment>
      <div>
        <h1>Phone number generator</h1>
      </div>
      {children}
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: '',
};

export default Layout;
