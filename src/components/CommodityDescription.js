import React from 'react';
import styled from 'styled-components';

const CommodityDescription = props => {
  // console.log(props.commodity.name);
  return (
    <div>
      <h1>{props.commodity.name}</h1>
      <img src={props.commodity.image} alt="" />
      <p>{props.commodity.description}</p>
    </div>
  );
};

export default CommodityDescription;
