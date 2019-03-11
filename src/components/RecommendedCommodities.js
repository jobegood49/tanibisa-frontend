import React from 'react';
import styled from 'styled-components';

import CommoditiesCards from '../components/CommoditiesCards';

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px solid hsla(135, 48%, 61%, 0.3);
  padding: 30px;
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
  width: 499px;
  border-top: 3px solid #6dcc84;
`;

const RecommendedCommodities = () => {
  return (
    <Section>
      <TitleDiv>
        <Title>
          <TitleIcon src="/assets/images/recommended-icon.svg" alt="" />
          <StyledH1>Recommended Commodities</StyledH1>
        </Title>
        <StyledHr />
      </TitleDiv>
      <CommoditiesCards />
    </Section>
  );
};

export default RecommendedCommodities;
