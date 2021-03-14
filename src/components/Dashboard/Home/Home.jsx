import React, { useEffect } from 'react'
import './Home.css'
import SearchBar from './SearchBar'
import ProductsList from './ProductsList'
import useProductsState from '../../../store/products.js'

export default function Home() {
  const [, { getProducts }] = useProductsState()

  useEffect(() => {
    getProducts('')
  }, [])

  return (
    <div className='home__container'>
      <SearchBar getProducts={getProducts} />
      <ProductsList />
    </div>
  )
}
