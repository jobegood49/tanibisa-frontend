import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  background: #f1f1f1;
  margin: 30px 0;
`;

class Cart extends Component {
  constructor() {
    super();
    this.state = {};
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
        <StyledDiv>
          <h3 />
          <h3 />
          <h3>Total</h3>
          <h3>1000</h3>
        </StyledDiv>
        <Footer />
      </div>
    );
  }
}

export default Cart;
