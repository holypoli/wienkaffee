/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import CartContext from './src/components/cartProvider'
import ProductContext from './src/components/productsProvider'

export const wrapRootElement = ({ element }) => (
  <ProductContext>
    <CartContext>
      {element}
    </CartContext>
  </ProductContext>
)
