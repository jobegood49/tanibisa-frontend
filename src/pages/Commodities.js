import React, { Component } from 'react'
import { connect } from 'react-redux'

class Commodities extends Component {
  render() {
    return <div>Commodities</div>
  }
}

const mapStateToProps = state => {
  return {
    commodities: state.commodities,
    // accessible through props.isAuthenticated
  }
}

export default connect(mapStateToProps)(Commodities)
