import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ViewWrapper = styled.div`
  margin: 30px 10px;
  border: 1px solid #000;
  border-radius: 14px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 0.5rem 0.5rem 2rem #464545, -0.5rem -0.5rem 2rem #acabab;
  @media screen and (min-width: 510px) {
    margin: 30px auto;
  }
`;

export const HeaderSection = styled.div`
  background-color: #445daf;
  color: #fff;
  width: 100%;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.h2`
  max-width: 300px;
  text-align: center;
  font-size: 28px;
  margin: 0 0 15px;
`;

export const Text = styled.p`
  margin: 0 0 15px;
  font-size: 18px;
  font-style: italic;
`;

export const Message = styled.p`
  margin: 0 0 15px;
  font-size: 22px;
  max-width: 300px;
  text-align: center;
  line-height: 1.34;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 15px;
  color: #0000ff;

  &:hover {
    color: tomato;
  }
`;

export const StyledBaseLink = styled.a`
  text-decoration: none;
  margin-bottom: 15px;
  color: #0000ff;

  &:hover {
    color: tomato;
  }
`;

export const MainSection = styled.div`
  padding: 30px 0;
  background-color: #c5d3fc;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 20px auto 50px;
`;

export const ContactsTitle = styled.h2`
  font-size: 30px;
  margin: 10px auto 30px;
`;

export const HomePageButton = styled(Link)`
  display: flex;
  align-items: center;

  justify-content: center;
  position: relative;
  box-sizing: border-box;

  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: #fff;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  width: 150px;
  height: 50px;
  background-image: linear-gradient(#323ff1, #1f2df8);

  &:hover,
  &:active {
    background-image: linear-gradient(#1221f5, #0818f5);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 370px) {
    width: 120px;
  }
`;

export const HomePageButtonsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
`;
