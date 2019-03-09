import React, { Component } from 'react';
import styled from 'styled-components';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commodities: [
        {
          id: 1,
          title: 'Mangoosten',
          description: 'The description of the red apple',
          image: 'image of the red apple'
        },
        {
          id: 2,
          title: 'Mangosteen',
          description: 'Description of the green mongo',
          image: 'image of the green mongo'
        },
        {
          id: 3,
          title: 'Mangosteen',
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
      flex-wrap: wrap;
    `;

    return (
      <Section>
        {this.state.commodities.map(
          (item,
          index => {
            return <Card key={index} item={item} />;
          })
        )}
      </Section>
    );
  }
}

export default Cards;
