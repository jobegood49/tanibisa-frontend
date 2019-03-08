import React from 'react';

import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  height: 64px;
  width: 64px;
  margin-right: 30px;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const StyledHr = styled.hr`
  margin-top: -15px;
  border-width: 3px;
  width: 442px;
  border-top: 3px solid #6dcc84;
`;

const Categories = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <Title>
          <StyledImg src="/assets/images/categories-icon.svg" alt="" />
          <StyledH1>Product Categories</StyledH1>
        </Title>
        <StyledHr />
      </StyledDiv>
    </StyledSection>
  );
};

export default Categories;
