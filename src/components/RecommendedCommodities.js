import React, { Component } from 'react';
import styled from 'styled-components';

class RecommendedCommodities extends Component {
  constructor() {
    super();
    this.state = {
      commodities: [
        {
          id: 1,
          title: 'Red Apple',
          description: 'The description of the red apple',
          image: 'image of the red apple'
        },
        {
          id: 2,
          title: 'Green Mongo',
          description: 'Description of the green mongo',
          image: 'image of the green mongo'
        },
        {
          id: 3,
          title: 'Yellow Banana',
          description: 'Description of the yellow banana',
          image: 'image of the yellow banana'
        }
      ]
    };
  }
  render() {
    const Section = styled.section`
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
      width: 499px;
      border-top: 3px solid #6dcc84;
    `;

    return (
      <Section>
        <TitleDiv>
          <Title>
            <TitleIcon src="/assets/images/recommended-icon.svg" alt="" />
            <StyledH1>Recommended Commodities</StyledH1>
          </Title>
          <StyledHr />
        </TitleDiv>
      </Section>
    );
  }
}

export default RecommendedCommodities;
