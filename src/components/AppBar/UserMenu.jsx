import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import defaultAvatart from 'img/placeholder.jpeg';
import {
  UserMenuWrapper,
  UserImg,
  UserText,
  UserSubText,
  LogoutBtn,
} from './AppBar.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const username = useSelector(authSelectors.getUsername);

  const handleLogout = () => dispatch(authOperations.logout());

  return (
    <UserMenuWrapper>
      <UserImg src={defaultAvatart} alt="defaultAvatar" width="32" />
      <UserText>
        Welcome, <UserSubText>{username}!</UserSubText>
      </UserText>
      <LogoutBtn type="button" onClick={handleLogout}>
        Logout
      </LogoutBtn>
    </UserMenuWrapper>
  );
}
