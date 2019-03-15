import React, { Component } from 'react'
import CommodityDescription from '../components/CommodityDescription'
import ProductCards from '../components/ProductCards'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { getCommodity } from '../redux/actions/commodity'

class Commodity extends Component {
  constructor() {
    super()
    this.state = {
      commodity: {
        name: 'Rome Beauty Apple',
        description:
          'Rome beauty apple has soft texture & pleasant smell. It tastes a little sour. This apple originally from Netherland and grow on the highland.',
        image: '/assets/images/rome-beauty-apple.png',
      },
      products: [
        {
          farmer_name: 'Jonathan',
          farmer_image: '/assets/images/jonathan-avatar.png',
          farmer_location: 'Kebumen',
          price: 34000,
        },
        {
          farmer_name: 'Nicholas',
          farmer_image: '/assets/images/nicholas-avatar.png',
          farmer_location: 'Bogor',
          price: 34000,
        },
      ],
    }
  }

  componentDidMount() {
    this.props.dispatch(getCommodity(this.props.match.params.id))
  }
  render() {
    console.log(this.state.commodity.name)
    return (
      <section>
        <Navigation />
        <CommodityDescription commodity={this.state.commodity} />
        <ProductCards
          products={this.state.products}
          commodity={this.state.commodity}
        />
        <Footer />
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    state,
  }
}

export default connect(mapStateToProps)(Commodity)
