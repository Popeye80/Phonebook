import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/authOperations';
import { TextField, Button } from '@mui/material';

import {
  Form,
  Title,
  StyledLink,
  Text,
  ViewWrapper,
  HeaderSection,
  MainSection,
} from './Views.styled';

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'email':
        return setEmail(event.currentTarget.value);
      case 'password':
        return setPassword(event.currentTarget.value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <ViewWrapper>
      <HeaderSection>
        <h1>Phonebook</h1>
      </HeaderSection>
      <MainSection>
        <Title>Sign in</Title>
        <Text>to continue to Phonebook</Text>
        <Form onSubmit={handleSubmit}>
          <TextField
            required
            name="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleChange}
            sx={{
              width: '280px',
              mb: '15px',
            }}
          />
          <TextField
            required
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={handleChange}
            sx={{
              width: '285px',
              mb: '15px',
            }}
          />
          <StyledLink to="/register">
            Have no account? Create it now!
          </StyledLink>
          <Button
            variant="contained"
            type="submit"
            sx={{
              display: 'block',
              width: '200px',
              height: '50px',
              backgroundImage: 'linear-gradient(#323ff1, #1f2df8)',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            Login
          </Button>
        </Form>
      </MainSection>
    </ViewWrapper>
  );
}
