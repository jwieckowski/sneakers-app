import React from 'react'
import './Sneakers.css'

import useSoldProductState from '../../../store/sold.js'
import useBoughtProductState from '../../../store/bought.js'
import useObservedProductState from '../../../store/observed.js'

import ProductsListDB from './ProductsListDB'

export default function Sneakers() {
  const [{ sold }, ] = useSoldProductState()
  const [{ bought }, ] = useBoughtProductState()
  const [{ observed }, ] = useObservedProductState()

  return (
    <div className='sneakers__container'>
      <ProductsListDB
        title='Observed'
        products={observed}
      />
      <ProductsListDB
        title='Bought'
        products={bought}
      />
      <ProductsListDB
        title='Sold'
        products={sold}
      />
    </div>
  )
}
