import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

const PublicRoute = ({ closed = false, redirectTo }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && closed;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  closed: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
