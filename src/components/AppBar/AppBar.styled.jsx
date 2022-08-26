import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #445daf;
  padding: 5px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: tomato;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:not(:first-child) {
    border-left: 1px solid #fff;
    padding-left: 15px;
  }
  &.active {
    color: tomato;
  }

  @media screen and (max-width: 510px) {
    font-size: 18px;
    &:not(:last-child) {
      margin-right: 0;
    }
    &:not(:first-child) {
      border-left: none;
      padding-left: 0;
    }
  }

  @media screen and (max-width: 510px) {
    display: flex;
    flex-direction: column;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserText = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 510px) {
    font-size: 16px;
  }
`;

export const UserSubText = styled.span`
  color: tomato;
`;

export const LogoutBtn = styled.button`
  margin-left: 10px;
  border-radius: 6px;
  border: 1px #230ca3 solid;
  padding: 8px;

  background-image: linear-gradient(#5861df, #424bcf);

  color: #fff;
  font-size: 14px;
  font-weight: 700;
  opacity: 1;

  &:hover {
    background-image: linear-gradient(#2e0cee, #351ff8);
    text-decoration: none;
  }

  &:active {
    background-image: linear-gradient(#230ca3, #1a0ba5);
    outline: none;
  }

  @media screen and (max-width: 510px) {
    font-size: 12px;
    margin-left: 5px;
  }
`;

export const NavigationWrapper = styled.div`
  @media screen and (max-width: 510px) {
    display: flex;
    flex-direction: column;
  }
`;
