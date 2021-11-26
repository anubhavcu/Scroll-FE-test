import React from 'react';
import { Route, Navigate } from 'react-router';
import HomeScreen from '../screens/HomeScreen';
const ProtectedRoute = ({ isLogin, component: Component, ...rest }) => {
  return isLogin ? <HomeScreen /> : <Navigate to='/' />;
};

export default ProtectedRoute;
