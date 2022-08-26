import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import authSelectors from 'redux/auth/authSelectors';

export default function PrivateRoute({ redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
};
