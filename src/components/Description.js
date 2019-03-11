import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  text-align: center;
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

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const DescriptionColumn = styled.div`
  width: 300px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 10px;
`;

const Description = () => {
  return (
    <Section>
      <TitleDiv>
        <Title>
          <TitleIcon src="/assets/images/works-icon.svg" alt="" />
          <StyledH1>How we work?</StyledH1>
        </Title>
      </TitleDiv>

      <StyledHr />
      <p>
        "Tanibisa gives online trading solution for harvested products directly
        from farmers to consument with the proper price for all"
      </p>
      <DescriptionContainer>
        <DescriptionColumn>
          <img src="/assets/images/quality-icon.svg" alt="" />
          <p>
            Tanibisa encourage farmers to improve quality of harvested products
            so that consuments can get best quality products from farmers.
          </p>
        </DescriptionColumn>
        <DescriptionColumn>
          <img src="/assets/images/best-price-icon.svg" alt="" />
          <p>
            Tanibisa encourage farmers to improve quality of harvested products
            so that consuments can get best quality products from farmers.
          </p>
        </DescriptionColumn>
        <DescriptionColumn>
          <img src="/assets/images/social-care-icon.svg" alt="" />
          <p>
            Tanibisa encourage farmers to improve quality of harvested products
            so that consuments can get best quality products from farmers.
          </p>
        </DescriptionColumn>
      </DescriptionContainer>
    </Section>
  );
};

export default Description;
