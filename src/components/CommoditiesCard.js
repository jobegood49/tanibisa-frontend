import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9);
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const CardImage = styled.img`
  border-radius: 5px 5px;
`;

const CommoditiesCard = ({ item }) => {
  return (
    <Card>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <hr />
      <p>{item.price}</p>
    </Card>
  );
};

export default CommoditiesCard;
