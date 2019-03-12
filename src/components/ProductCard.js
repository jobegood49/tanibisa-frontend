import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin: 10px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 191px;
`;

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledP = styled.p`
  margin-top: -10px;
`;

const QuantityHandler = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f1f1f1;
`;

const IncrementDecrementButton = styled.button`
  background: #6c757d;
  border: none;
  width: 50px;
  background: hsla(208, 7%, 46%, 1);
  color: #fff;
  font-size: 20px;
  border-radius: 5px;

  &:hover {
    background: hsla(208, 7%, 56%, 1);
  }
`;

const BuyButton = styled.button`
  width: 200px;
  padding: 10px;
  background: hsla(138, 48%, 61%, 1);
  color: #fff;
  border: none;
  margin-bottom: 20px;
  border-radius: 5px;

  &:hover {
    background: hsla(138, 48%, 71%, 1);
  }
`;

const ProductCard = ({ product, commodity }) => {
  return (
    <Card>
      <h1>{product.farmer_name}</h1>
      <StyledImg src={product.farmer_image} alt="" />
      <StyledImg src={commodity.image} />
      <CardMeta>
        <h3>{commodity.name}</h3>
        <StyledP>Rp. {product.price}/Kg</StyledP>
        <StyledP>By {product.farmer_name}</StyledP>
        <StyledP>Location: {product.farmer_location}</StyledP>
      </CardMeta>
      <QuantityHandler>
        <IncrementDecrementButton>-</IncrementDecrementButton>
        <p>Quantity: 0</p>
        <IncrementDecrementButton>+</IncrementDecrementButton>
      </QuantityHandler>
      <BuyButton>Buy</BuyButton>
    </Card>
  );
};

export default ProductCard;
