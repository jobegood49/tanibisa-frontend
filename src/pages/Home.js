import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Jumbotron from '../components/Jumbotron';
import Categories from '../components/Categories';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Jumbotron />
        <Categories />
      </div>
    );
  }
}

export default Home;
