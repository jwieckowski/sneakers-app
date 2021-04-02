import React from 'react'
import './ProductsListDB.css'

import ProductItemDB from './ProductItemDB'

const getProductItems = (products) => {
  return products.map(({ image, name, releaseDate, uuid }) => {
    return (
      <ProductItemDB
        key={uuid}
        image={image}
        name={name}
        releaseDate={releaseDate}
        uuid={uuid}
      />
    )
  })
}

export default function ProducstListDB ({ title, products }) {
  return (
    <div className='products__list__db__container'>
      <div className='products__list__db__header'>
        <h1>{title}</h1>
      </div>
      {getProductItems(products)}
    </div>
  )
}
