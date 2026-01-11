import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/admin" replace />;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem('token');
      return <Navigate to="/admin" replace />;
    }
    if (payload.role !== 'admin') {
      return <Navigate to="/" replace />;
    }

  } catch (error) {
    localStorage.removeItem('token');
    return <Navigate to="/admin" replace />;
  }

  return children ? children : <Outlet />;
};

export default AdminRoute;
