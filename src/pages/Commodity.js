import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommodityDescription from '../components/CommodityDescription'
import ProductCards from '../components/ProductCards'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getCommodity } from '../redux/actions/commodity'

class Commodity extends Component {
  componentDidMount() {
    // get /commodities/:id
    this.props.dispatch(getCommodity(this.props.match.params.id))
  }

  render() {
    return (
      <section>
        <Navigation />
        {this.props.commodity ? (
          <div>
            <CommodityDescription commodity={this.props.commodity} />
            <ProductCards
              products={this.props.commodity.products}
              commodity={this.props.commodity}
            />
          </div>
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
        <Footer />
      </section>
    )
  }
}

const mapStateToProps = state => {
  // state is from redux
  return {
    isLoading: state.commodity.isLoading,
    commodity: state.commodity.data // data, not commodity in our reducer
    // we made it into a props for our component
  }
}

export default connect(mapStateToProps)(Commodity)
