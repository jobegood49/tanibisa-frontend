import React, { Component } from 'react'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'
import { getOneBuyer } from '../redux/actions/buyers'
import Footer from '../components/Footer'
import { push } from 'connected-react-router'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
`

class ProfileFarmer extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')

    this.props.dispatch(getOneBuyer(token))
  }

  createProduct = () => {
    this.props.dispatch(push('/createProduct'))
  }
  render() {
    return (
      <div>
        <Navigation />
        <StyledDiv>
          <div>
            <img src="/assets/images/avatar.svg" alt="" />
          </div>
          <div>
            <p>Username : {this.props.buyers && this.props.buyers.name}</p>
            <p>Email : {this.props.buyers && this.props.buyers.email}</p>
          </div>
        </StyledDiv>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    buyers: state.buyers.data,
  }
}

export default connect(mapStateToProps)(ProfileFarmer)
