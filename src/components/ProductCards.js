import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/ProductCard'

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
`

const products = [
  {
    _id: '5c8b51b3b3fdfa0017a6376f',
    farmer_id: {
      products: ['5c8b51b3b3fdfa0017a6376f'],
      _id: '5c8b5161b3fdfa0017a6376e',
      name: 'Farmer',
      email: 'farmer@gmail.com',
      image: 'assets/avatar.jpg',
      location: 'City, Country',
      id: 4,
      __v: 0
    },
    commodity_id: {
      tags: ['rice', 'organics', 'black'],
      products: ['5c8b51b3b3fdfa0017a6376f'],
      _id: '5c8a32dcdd35f4001715c17a',
      name: 'Black Rice',
      description:
        'Wonogiri Organic Black Rice Black rice is a variety of rice that is widely consumed as an alternative to ordinary rice. The benefits of black rice include lowering cholesterol, maintaining blood sugar stability, preventing cancer, promoting digestion, preventing heart attacks, improving liver function, and more.',
      image:
        'https://regopantes.imgix.net/commodities/eb3ea13d-4679-499b-a122-c9ab2923a729.png?w=300',
      id: 3,
      __v: 0
    },
    price: 33000,
    id: 3,
    __v: 0
  }
]

const ProductCards = ({ products, commodity }) => {
  return (
    <Section>
      {products &&
        products.map((product, index) => {
          return (
            <ProductCard key={index} product={product} commodity={commodity} />
          )
        })}
    </Section>
  )
}

export default ProductCards
