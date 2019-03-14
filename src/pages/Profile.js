import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'
import { getOneFarmer } from '../redux/actions/farmers'
import Footer from '../components/Footer'

class Profile extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    this.props.dispatch(getOneFarmer(token))
  }
  render() {
    return (
      <div>
        <Navigation />
        <h1>{this.props.farmers && this.props.farmers.email}</h1>
        <h1>{this.props.farmers && this.props.farmers.name}</h1>
        <h1>{this.props.farmers && this.props.farmers.location}</h1>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    farmers: state.farmers.data,
  }
}

export default connect(mapStateToProps)(Profile)
