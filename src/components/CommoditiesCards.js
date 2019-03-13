import React, { Component } from 'react';
import styled from 'styled-components';
import CommoditiesCard from '../components/CommoditiesCard';
import { connect } from 'react-redux';
import { getCommodities } from '../redux/actions/commodities';

class CommoditiesCards extends Component {
  constructor() {
    super();
    this.state = {
      commodities: [
        {
          id: 1,
          name: 'Rome Beauty Apple',
          price: 'Rp 34.000/Kg',
          image: '/assets/images/rome-beauty-apple.png',
          description:
            'Rome beauty apple has soft texture & pleasant smell. It tastes a little sour. This apple originally from Netherland and grow on the highland. '
        },
        {
          id: 2,
          name: 'Rome Beauty Apple',
          price: 'Rp 34.000/Kg',
          image: '/assets/images/rome-beauty-apple.png',
          description:
            'Rome beauty apple has soft texture & pleasant smell. It tastes a little sour. This apple originally from Netherland and grow on the highland. '
        },
        {
          id: 3,
          name: 'Rome Beauty Apple',
          price: 'Rp 34.000/Kg',
          image: '/assets/images/rome-beauty-apple.png',
          description:
            'Rome beauty apple has soft texture & pleasant smell. It tastes a little sour. This apple originally from Netherland and grow on the highland. '
        }
      ]
    };
  }

  componentDidMount = () => {
    this.props.dispatch(getCommodities());
  };

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

const mapStateToProps = state => {
  return {
    commodities: state.commodities.data,
    isLoading: state.commodities.isLoading
  };
};

export default connect(mapStateToProps)(CommoditiesCards);
