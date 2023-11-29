import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Login({ user }) {
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <div>Login</div>;
}
