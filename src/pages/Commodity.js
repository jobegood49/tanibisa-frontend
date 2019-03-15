import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommodityDescription from '../components/CommodityDescription'
import ProductCards from '../components/ProductCards'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getCommodity } from '../redux/actions/commodity'

class Commodity extends Component {
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
    commodity: state.commodity
  }
}

export default connect(mapStateToProps)(Commodity)
