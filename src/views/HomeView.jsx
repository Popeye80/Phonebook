import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import Rating from '@mui/material/Rating';

import { useState } from 'react';
import {
  ViewWrapper,
  HeaderSection,
  MainSection,
  Title,
  StyledBaseLink,
  Text,
  Message,
  HomePageButton,
  HomePageButtonsWrapper,
} from './Views.styled';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const username = useSelector(authSelectors.getUsername);
  const [value, setValue] = useState();
  return (
    <ViewWrapper>
      <HeaderSection>
        <h1>Phonebook</h1>
      </HeaderSection>
      <MainSection>
        {isLoggedIn ? (
          <>
            <Title>Hello {username}</Title>
            <Text>I hope you enjoy using the app!</Text>

            <Rating
              name="simple-controlled"
              sx={{
                mb: '15px',
              }}
              size="large"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <Message>
              Any questions or offers? You can contact me on{' '}
              <StyledBaseLink
                href="https://www.linkedin.com/in/bogdan-myagkiy/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </StyledBaseLink>
            </Message>
          </>
        ) : (
          <>
            <Title>Hello! To start using this App please</Title>
            <HomePageButtonsWrapper>
              <HomePageButton to="/login">Login</HomePageButton>

              <HomePageButton to="/register">Register</HomePageButton>
            </HomePageButtonsWrapper>
          </>
        )}
      </MainSection>
    </ViewWrapper>
  );
}
