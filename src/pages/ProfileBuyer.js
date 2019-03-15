import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'
import { getOneBuyer } from '../redux/actions/buyers'
import Footer from '../components/Footer'

class ProfileFarmer extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')

    this.props.dispatch(getOneBuyer(token))
  }
  render() {
    return (
      <div>
        <Navigation />
        <h1>{this.props.buyers && this.props.buyers.email}</h1>
        <h1>{this.props.buyers && this.props.buyers.name}</h1>
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
