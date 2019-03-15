import React, { Component } from 'react'
import styled from 'styled-components'
import CommoditiesCard from '../components/CommoditiesCard'
import { connect } from 'react-redux'
import { getCommodities } from '../redux/actions/commodities'

class CommoditiesCards extends Component {
  constructor() {
    super()
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
    }
  }

  componentDidMount = () => {
    this.props.dispatch(getCommodities())
  }

  render() {
    const Section = styled.section`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 30px 0;
    `

    return (
      <Section>
        {this.props.isLoading ? (
          <span>Loading Commodities...</span>
        ) : (
          this.props.commodities &&
          this.props.commodities.map((item, index) => {
            // console.log(item);
            return <CommoditiesCard item={item} key={index} />
          })
        )
        //   if (this.props.isLoading) {
        //     return <span>is loading...</span>;
        //   } else {
        //     console.log('test');
        //     this.props.commodities.map((item, index) => {
        //       console.log(item);
        //       return <div>{item.name}</div>;
        //     });
        //   }
        // }
        }
      </Section>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.commodities.isLoading,
    commodities: state.commodities.data
  }
}

export default connect(mapStateToProps)(CommoditiesCards)
