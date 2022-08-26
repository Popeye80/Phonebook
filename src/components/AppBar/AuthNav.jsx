import { StyledLink } from './AppBar.styled';

export function AuthNav() {
  return (
    <div>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </div>
  );
}
