import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthGuard({ children }) {
  // const account = useSelector((state) => state.account);

  const user = localStorage.getItem('userEmail')

  if (!user) {
    return <Redirect to="/login" />;
  }

  return children;
}

AuthGuard.propTypes = {
  children: PropTypes.any
};

export default AuthGuard;
