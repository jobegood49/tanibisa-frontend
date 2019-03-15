import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/logout';

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
    background: hsla(138, 48%, 61%, 1);
    color: #fff;
  }
`;

const Navigation = ({
  isAuthenticatedFarmer,
  isAuthenticatedBuyer,
  dispatch
}) => {
  const handleClick = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    dispatch(logout());

    dispatch(push('/'));
  };

  const isAuthenticated = isAuthenticatedFarmer || isAuthenticatedBuyer;

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
        {isAuthenticatedBuyer && (
          <NavLi>
            <Link to="/cart">
              <img src="/assets/images/shopping-cart.svg" alt="" />
            </Link>
          </NavLi>
        )}

        {!isAuthenticated && (
          <NavLi>
            <StyledLink to="/login">
              <LoginButton>Login</LoginButton>
            </StyledLink>
          </NavLi>
        )}

        {!isAuthenticated && (
          <NavLi>
            <StyledLink to="/register">
              <RegisterButton>Register</RegisterButton>
            </StyledLink>
          </NavLi>
        )}

        {isAuthenticatedFarmer && (
          <NavLi>
            <StyledLink to={'/profileFarmer'}>Your Profile</StyledLink>
          </NavLi>
        )}

        {isAuthenticatedBuyer && (
          <NavLi>
            <StyledLink to={'/profileBuyer'}>Your Profile</StyledLink>
          </NavLi>
        )}

        {isAuthenticated && (
          <NavLi>
            <LoginButton onClick={handleClick}>Logout</LoginButton>
          </NavLi>
        )}
      </StyledDiv>
    </Nav>
  );
};

// Get data from Redux store
// Function to map the specified state to componet's props
const mapStateToProps = state => {
  return {
    // get the value from the store, specifically
    isAuthenticatedFarmer: state.farmers.isAuthenticated || false,
    isAuthenticatedBuyer: state.buyers.isAuthenticated || false
    // then it's accessible through isAuthenticated
  };
};

export default connect(mapStateToProps)(Navigation);
