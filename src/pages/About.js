import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
`;

const About = () => {
  return (
    <div>
      <Navigation />
      <StyledDiv>
        <img src="/assets/images/flow.png" alt="tanibisa flow" />
        <p>
          Farmers can upload the crops they want to sell online. Then consumers
          make purchases through the tanibisa.com
        </p>
      </StyledDiv>
      <StyledDiv>
        <img src="/assets/images/products.png" alt="products" />
        <p>
          Products from farmers at tanibisa are guaranteed fresh because new
          farmers will harvest their products the date before they are ordered.
          After the customer places an order, the consumer will get a delivery
          date and the product will arrive at the consumer’s doorstep in less
          than 12 hours on the dat of delivery.
        </p>
      </StyledDiv>

      <StyledDiv>
        <img src="/assets/images/scale.png" alt="scale" />
        <p>
          Appropriate prices for farmers and consumers are accurated by the
          system by finding a new balance between the price of farmers to
          middleman at the consumer price of buying from produce in the final
          market. So that obtained prices at farmers are higher and prices at
          consumers are lower.
        </p>
      </StyledDiv>

      <Footer />
    </div>
  );
};

export default About;
