import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const StyledDiv = styled.div`
  text-align: center;
  border-radius: 10px;
  width: 50%;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
`;

const StyledP = styled.p`
  padding: 30px;
`;

const CommodityDescription = props => {
  // console.log(props.commodity.name);
  return (
    <Container>
      <StyledDiv>
        {' '}
        <h1>{props.commodity.name}</h1>
        <img src={props.commodity.image} alt={props.commodity.name} />
        <StyledP>{props.commodity.description}</StyledP>
      </StyledDiv>
    </Container>
  );
};

export default CommodityDescription;
