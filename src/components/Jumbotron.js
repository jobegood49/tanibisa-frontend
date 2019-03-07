import React from 'react';
import JumbotronText from '../components/JumbotronText';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: linear-gradient(hsla(0, 0%, 20%, 0.8), hsla(0, 0%, 20%, 0.8)),
    url('/assets/images/jumbotron-background.jpg') no-repeat center;
  background-size: cover;
  height: 540px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Jumbotron = () => {
  return (
    <StyledHeader>
      <JumbotronText />
    </StyledHeader>
  );
};

export default Jumbotron;
