import React from 'react'
import './ProductsList.css'
import useProductsState from '../../../../store/products.js'
import ProductItem from './ProductItem/'
import ProductDetails from './ProductDetails'
import Modal from '../../UI/Modal'

const getProductsList = (products) => {
  if (products.length === 0) return 'No match results...'
  return products.map((p, index) => {
    return (
      <ProductItem
        key={index}
        details={p}
      />
    )
  })
}

export default function ProductsList () {
  const [{ products, loading }, ] = useProductsState()

  return (
    <div className='products__container'>
      {
        loading
          ? 'Loading...'
          : getProductsList(products)
      }
      <ProductDetails />
      <Modal />
    </div>
  )
}
