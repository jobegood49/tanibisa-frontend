import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import RegisterChoice from '../components/RegisterChoice'

class Register extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <RegisterChoice />
        <Footer />
      </div>
    )
  }
}

export default Register
