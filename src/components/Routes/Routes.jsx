import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo = '/', ...rest }) => {
  const isLoginValue = localStorage.getItem('isLogin');
  const isLoggedIn = isLoginValue !== 'true' || isLoginValue === null;

  return isLoggedIn ? <Component {...rest} /> : <Navigate to={redirectTo} />;
};

export const PrivateRoute = ({ component: Component, redirectTo = '/login', ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLogin') === 'true';

  return isLoggedIn ? <Component {...rest} /> : <Navigate to={redirectTo} />;
};