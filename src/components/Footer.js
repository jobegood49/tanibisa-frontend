import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
    hsla(135, 47%, 99%, 1),
    hsla(135, 70%, 53%, 0.55)
  );
`

const FooterText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-top: 10px;

  &:hover {
    color: #555;
  }
`

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
`

const Copyright = styled.p`
  text-align: center;
  margin-top: 50px;
`

const Footer = () => {
  return (
    <Section>
      <FooterText>
        <StyledDiv>
          <h3>Sitemap</h3>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/commodities">Commodities</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </StyledDiv>
        <StyledDiv>
          <h3>Contact</h3>
          <p>tanibisa.team@gmail.com</p>
        </StyledDiv>
        <StyledDiv>
          <h3>Follow Us</h3>
          <SocialMediaIcons>
            <a href="https://facebook.com/tanibisa">
              <img src="/assets/images/facebook-logo.svg" alt="Facebook logo" />
            </a>
            <a href="https://twitter.com/tanibisa">
              <img src="/assets/images/twitter-logo.svg" alt="Twitter logo" />
            </a>
            <a href="https://instagram.com/tanibisa">
              <img
                src="/assets/images/instagram-logo.svg"
                alt="Instagram logo"
              />
            </a>
          </SocialMediaIcons>
        </StyledDiv>
      </FooterText>
      <Logo>
        <Link to="/">
          <img src="/assets/logo/tanibisa-logo.svg" alt="Tanibisa logo" />
        </Link>
      </Logo>

      <Copyright>
        Copyright &copy; 2019 Tanibisa. All Rights Reserved.
      </Copyright>
    </Section>
  )
}

export default Footer
