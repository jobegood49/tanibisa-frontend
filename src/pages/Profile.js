import React, { Component } from 'react'
import Navigation from '../components/Navigation'

import Footer from '../components/Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>this is the profile page</h1>
        <Footer />
      </div>
    )
  }
}

export default Home
