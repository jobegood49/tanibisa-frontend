import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/ProductCard'

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
`

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
