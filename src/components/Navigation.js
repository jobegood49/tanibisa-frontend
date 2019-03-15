import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { Link } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const NavLi = styled.li`
  display: inline;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`

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
`

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
`

const Navigation = ({ isAuthenticated, dispatch }) => {
  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('token')
    dispatch(push('/'))
  }

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
        {!isAuthenticated && (
          <NavLi>
            <img src="/assets/images/shopping-cart.svg" alt="" />
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

        {isAuthenticated && (
          <NavLi>
            <StyledLink to="/profileFarmer">Your Profile</StyledLink>
          </NavLi>
        )}

        {isAuthenticated && (
          <NavLi>
            <LoginButton onClick={logout}>Logout</LoginButton>
          </NavLi>
        )}
      </StyledDiv>
    </Nav>
  )
}

// Get data from Redux store
// Function to map the specified state to componet's props
const mapStateToProps = state => {
  return {
    // get the value from the store, specifically
    isAuthenticated: state.farmers.isAuthenticated || false,
    // then it's accessible through isAuthenticated
  }
}

export default connect(mapStateToProps)(Navigation)
