import React from 'react';

import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleIcon = styled.img`
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

const IconContainers = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  width: 1200px;
  margin: 30px 0;
  border-radius: 10px;
`;

const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const CommoditiesIcon = styled.img`
  height: 146px;
`;

const CommoditiesText = styled.h3`
  font-size: 24px;
`;

const Categories = () => {
  return (
    <StyledSection>
      <TitleDiv>
        <Title>
          <TitleIcon
            src="/assets/images/categories-icon.svg"
            alt="Commodites"
          />
          <StyledH1>Commodities Categories</StyledH1>
        </Title>
        <StyledHr />
      </TitleDiv>
      <IconContainers>
        <IconContainer>
          <CommoditiesIcon src="/assets/images/fruits-icon.png" alt="Fruits" />
          <CommoditiesText>Fruits</CommoditiesText>
        </IconContainer>
        <IconContainer>
          <CommoditiesIcon
            src="/assets/images/vegetables-icon.png"
            alt="Vegetables"
          />
          <CommoditiesText>Vegetables</CommoditiesText>
        </IconContainer>
        <IconContainer>
          <CommoditiesIcon src="/assets/images/rice-icon.png" alt="Rice" />
          <CommoditiesText>Rice</CommoditiesText>
        </IconContainer>
      </IconContainers>
    </StyledSection>
  );
};

export default Categories;
