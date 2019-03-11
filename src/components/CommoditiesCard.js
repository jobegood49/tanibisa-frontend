import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9);
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
