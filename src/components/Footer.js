import React from 'react';

import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FooterText = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Information = styled.div``;
const Footer = () => {
  return (
    <Section>
      <FooterText>
        <StyledDiv>
          <h3>Information</h3>
          <p>Home</p>
          <p>About</p>
          <p>Commodities</p>
        </StyledDiv>
        <StyledDiv>
          <h3>Contact</h3>
          <p>tanibisa.team@gmail.com</p>
        </StyledDiv>
        <StyledDiv>
          <h3>Follow Us:</h3>
          <div>
            <img src="/assets/images/facebook-logo.svg" alt="facebook logo" />
            <img src="/assets/images/twitter-logo.svg" alt="twitter logo" />
            <img src="/assets/images/instagram-logo.svg" alt="instagram logo" />
          </div>
        </StyledDiv>
      </FooterText>
    </Section>
  );
};

export default Footer;
