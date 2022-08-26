import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { Wrapper } from './AppBar.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Wrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Wrapper>
  );
}


