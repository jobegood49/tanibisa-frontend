import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { connect } from 'react-redux';
import { getOneFarmer } from '../redux/actions/farmers';
import Footer from '../components/Footer';
import { push } from 'connected-react-router';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -50px;
`;

const AddProductButton = styled.button`
  border-radius: 5px;
  background: hsla(138, 48%, 61%, 1);
  color: #fff;
  padding: 10px 40px;
  transition: 0.2s;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background: hsla(138, 48%, 71%, 1);
  }
`;

class ProfileFarmer extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.dispatch(getOneFarmer(token));
  }
  createProduct = () => {
    this.props.dispatch(push('/createProduct'));
  };
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
        <ButtonDiv>
          <AddProductButton onClick={this.createProduct}>
            Create A Product
          </AddProductButton>
        </ButtonDiv>

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
