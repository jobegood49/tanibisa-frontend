import React, { Component } from 'react'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getOneCart } from '../redux/actions/getonecart'
import { connect } from 'react-redux'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  background: #f1f1f1;
  margin: 30px 0;
`

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      totalPrice: 0,
    }
  }

  componentDidMount() {
    if (this.props.cart) {
      this.props.dispatch(getOneCart(this.props.cart.data.result.id))
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <StyledDiv>
          <h3>Product</h3>
          <h3>Quantity</h3>
          <h3>Price/unit</h3>
          <h3>Total Price</h3>
        </StyledDiv>
        {this.props.cart && (
          <div>
            {this.props.cart.products &&
              this.props.cart.products.map(product => {
                return (
                  <StyledDiv>
                    <div>{product._id.commodity_id.name}</div>
                    <div>{product.quantity}</div>
                    <div>{product._id.price}</div>
                    <div>
                      {parseInt(product._id.price) * parseInt(product.quantity)}
                    </div>
                  </StyledDiv>
                )
              })}
          </div>
        )}
        <StyledDiv />
        <StyledDiv>
          <h3 />
          <h3 />
          <h3>Total</h3>
          <h3>
            {this.props.cart && this.props.cart.products
              ? this.props.cart.products.reduce((a, b) => {
                  const price = parseInt(b._id.price) * parseInt(b.quantity)

                  return a + price
                }, 0)
              : 0}
          </h3>
        </StyledDiv>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // state is from redux
  return {
    // isLoading: state.commodity.isLoading,
    // commodity: state.commodity.data // data, not commodity in our reducer
    // we made it into a props for our component
    cart: state.cart.latestResponse,
  }
}

export default connect(mapStateToProps)(Cart)
