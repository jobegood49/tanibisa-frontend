import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px solid hsla(135, 48%, 61%, 0.3);
  padding: 30px;
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
`

const StyledH1 = styled.h1`
  font-size: 30px;
`

const StyledHr = styled.hr`
  margin-top: -15px;
  width: 442px;
  border-top: 3px solid #6dcc84;
`

const ContainerDiv = styled.div`
  display: flex;
`
const Card = styled.div`
  text-align: center;
  margin: 50px 100px;
`
const IconFarmer = styled.div`
  width: 400px;
  height: 300px;
  background: url(assets/logo/farmer.png);
  background-size: 400px 300px;
`
const IconBuyer = styled.div`
  width: 400px;
  height: 300px;
  background: url(assets/logo/buyer.svg);
  background-size: 400px 300px;
`
const Categories = () => {
  return (
    <StyledSection>
      <TitleDiv>
        <Title>
          <StyledH1>Which One Are you?</StyledH1>
        </Title>
        <StyledHr />
      </TitleDiv>
      <ContainerDiv>
        <Card>
          <Link to="/registerFarmer">
            <IconFarmer />
          </Link>
          <h1>Farmer</h1>
          <h3>Register as a Farmer</h3>
        </Card>
        <Card>
          <Link to="/registerBuyer">
            <IconBuyer />
          </Link>
          <h1>Buyer</h1>
          <h3>Register as a Buyer</h3>
        </Card>
      </ContainerDiv>
    </StyledSection>
  )
}

export default Categories
