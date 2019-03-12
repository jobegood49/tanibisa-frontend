import React, { Component } from 'react';
import CommodityDescription from '../components/CommodityDescription';

class Commodity extends Component {
  constructor() {
    super();
    this.state = {
      commodity: {
        name: 'Rome Beauty Apple',
        description:
          'Rome beauty apple has soft texture & pleasant smell. It tastes a little sour. This apple originally from Netherland and grow on the highland. ',
        image: '/assets/images/rome-beauty-apple.png'
      },
      products: [
        {
          farmer_name: 'Jonathan',
          farmer_image: '',
          farmer_location: 'Kebumen',
          price: 34000
        },
        {
          farmer_name: 'Nicholas',
          farmer_image: '',
          farmer_location: 'Bogor',
          price: 34000
        }
      ]
    };
  }
  render() {
    console.log(this.state.commodity.name);
    return (
      <section>
        <CommodityDescription commodity={this.state.commodity} />
      </section>
    );
  }
}

export default Commodity;
