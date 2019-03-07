import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavLi = styled.li`
  display: inline;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled.button`
  border-radius: 5px;
  background: hsla(138, 48%, 61%, 1);
  color: #fff;
  padding: 10px 40px;
  transition: 0.2s;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background: hsla(138, 48%, 71%, 1);
  }
`;

const RegisterButton = styled.button`
  border-radius: 5px;
  background: #fff;
  color: #000;
  padding: 10px 40px;
  transition: 0.2s;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #6dcc84;
  cursor: pointer;

  &:hover {
    background: hsla(138, 48%, 71%, 1);
    color: #fff;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <StyledDiv>
        <NavLi>
          <StyledLink to="/">
            <img src="/assets/logo/tanibisa-logo.svg" alt="" />
          </StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/">Home</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/commodities">Commodities</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/about">About</StyledLink>
        </NavLi>
      </StyledDiv>
      <StyledDiv>
        <NavLi>
          <img src="/assets/images/shopping-cart.svg" alt="" />
        </NavLi>
        <NavLi>
          <StyledLink to="/login">
            <LoginButton>Login</LoginButton>
          </StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/register">
            <RegisterButton>Register</RegisterButton>
          </StyledLink>
        </NavLi>
      </StyledDiv>
    </Nav>
  );
};

export default Navigation;
