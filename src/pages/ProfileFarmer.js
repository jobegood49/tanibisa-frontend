import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { connect } from 'react-redux';
import { getOneFarmer } from '../redux/actions/farmers';
import Footer from '../components/Footer';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
`;

class ProfileFarmer extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.dispatch(getOneFarmer(token));
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
            <p>Username : {this.props.farmers && this.props.farmers.name}</p>
            <p>Email : {this.props.farmers && this.props.farmers.email}</p>
            <p>
              Location : {this.props.farmers && this.props.farmers.location}
            </p>
          </div>
        </StyledDiv>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    farmers: state.farmers.data
  };
};

export default connect(mapStateToProps)(ProfileFarmer);
