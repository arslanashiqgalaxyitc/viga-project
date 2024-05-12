import React from 'react';
// import { Navigate } from 'react-router-dom';

// components and utilities
import Layout from 'components/layout';

function PrivateLayout() {
  // const token = localStorage.getItem('tpken');
  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Layout />;
}

export default PrivateLayout;
