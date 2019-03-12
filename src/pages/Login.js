import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import LoginChoice from '../components/LoginChoice'

class Register extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <LoginChoice />
        <Footer />
      </div>
    )
  }
}

export default Register
