import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { StyledLink, NavigationWrapper } from './AppBar.styled';
export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <NavigationWrapper>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My contacts</StyledLink>}
    </NavigationWrapper>
  );
}
