import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Jumbotron from '../components/Jumbotron';
import Categories from '../components/Categories';
import RecommendedCommodities from '../components/RecommendedCommodities';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Jumbotron />
        <Categories />
        <RecommendedCommodities />
        <Footer />
      </div>
    );
  }
}

export default Home;
