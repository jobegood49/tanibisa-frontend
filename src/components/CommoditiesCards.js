import React, { Component } from 'react';
import styled from 'styled-components';
import CommoditiesCard from '../components/CommoditiesCard';

class CommoditiesCards extends Component {
  constructor() {
    super();
    this.state = {
      commodities: [
        {
          id: 1,
          name: 'Mangoosten',
          price: 'Rp 14.000/ 500 gram',
          image: '/assets/images/mangosteen.png'
        },
        {
          id: 2,
          name: 'Mangosteen',
          price: 'Rp 14.000/ 500 gram',
          image: '/assets/images/mangosteen.png'
        },
        {
          id: 3,
          name: 'Mangosteen',
          price: 'Rp 14.000/ 500 gram',
          image: '/assets/images/mangosteen.png'
        },
        {
          id: 4,
          name: 'Mangosteen',
          price: 'Rp 14.000/ 500 gram',
          image: '/assets/images/mangosteen.png'
        }
      ]
    };
  }
  render() {
    const Section = styled.section`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 30px 0;
    `;

    return (
      <Section>
        {this.state.commodities.map((item, index) => {
          return <CommoditiesCard key={index} item={item} />;
        })}
      </Section>
    );
  }
}

export default CommoditiesCards;
