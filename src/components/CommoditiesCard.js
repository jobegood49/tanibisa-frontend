import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const CardContainer = styled.main`
  position: relative;
  width: 300px;
  height: 350px;
  margin: 10px;
`

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`

const Front = styled.div`
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  backface-visibility: hidden;
  position: absolute;
`

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #363636;
  transform: rotateY(180deg);
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardImage = styled.img`
  border-radius: 5px 5px;
  width: 300px;
  height: 191px;
`

const StyledHr = styled.hr`
  width: 216px;
  border-top: 3px solid #62cc84;
`

const PriceText = styled.p`
  color: #726767;
  margin-bottom: 50px;
`

const CardButton = styled.button`
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  margin: 30px 0;
  border: none;
  color: #fff;
  background: #6dcc84;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: hsla(138, 48%, 71%, 1);
  }
`

const CommoditiesCard = ({ item }) => {
  return (
    <CardContainer>
      <Card>
        <Front>
          <CardImage src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <StyledHr />
          <PriceText>{item.price}</PriceText>
        </Front>
        <Back>
          <Link to={`/commodities/${item.id}`}>
            <CardButton>See More</CardButton>
          </Link>
        </Back>
      </Card>
    </CardContainer>
  )
}

export default CommoditiesCard
