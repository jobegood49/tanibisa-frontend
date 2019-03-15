import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { registerBuyer } from '../redux/actions/register';

const FormContent = styled.div`
  margin: 30px;
  margin-top: 30px;
`;

const FormFieldSet = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: 'Viga', sans-serif;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  padding: 10px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid grey;
  width: 100%;
`;

const InputSubmit = styled.input`
  padding: 15px;
  background: #6dcc84;
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: hsla(145, 50%, 72%, 1);
  }
`;

const Heading = styled.h1`
  margin: 10px 0;
  text-align: center;
  color: #333;
`;

const SubHeading = styled.h3`
  margin: 10px 0;
  text-align: center;
  color: #6dcc84;
`;

class RegisterFarmer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  onChange = event => {
    console.log('hello');
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('inside the submit');
    if (this.state.name && this.state.email && this.state.password) {
      console.log('we are ready to register buyer', this.state.name);

      this.props.dispatch(
        // this is a thunk in actions
        registerBuyer({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      );
    } else {
      console.error('One of the register fields are not entered yet');
    }
  };

  render() {
    return (
      <div>
        <Navigation />
        <Form onSubmit={this.handleSubmit}>
          <Heading>
            <img src="/assets/logo/tanibisa-logo.svg" alt="" />
          </Heading>
          <SubHeading>Register as a buyer</SubHeading>
          <FormContent>
            <FormFieldSet>
              <Label>Your full name:</Label>
              <Input
                name="name"
                onChange={this.onChange}
                value={this.state.name}
                type="text"
                placeholder="First Last"
              />
            </FormFieldSet>

            <FormFieldSet>
              <Label>Your email address:</Label>
              <Input
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                type="email"
                placeholder="yourname@domain.com"
              />
            </FormFieldSet>

            <FormFieldSet>
              <Label>Your password:</Label>
              <Input
                name="password"
                onChange={this.onChange}
                value={this.state.password}
                type="password"
                placeholder="password"
              />
            </FormFieldSet>

            <InputSubmit type="submit" value="Sign Up" />
          </FormContent>
        </Form>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(RegisterFarmer);
