import React from 'react'
import './ProductItem.css'
import useProductsState from '../../../../../store/products.js'

export default function ProductItem ({ details }) {
  const [, { setActiveProduct }] = useProductsState()
  const { image, name, releaseDate, retail } = details

  const handleClick = (e) => {
    e.preventDefault()
    setActiveProduct(details)
  }

  return (
    <div className='product__item__container' onClick={handleClick}>
      <div>
        <img
          src={image}
          alt={`${name}`}
          className='product__item__image'
        />
      </div>
      <div className='product__item__details'>
        <h4>{name}</h4>
        <div>
          <p>Release date: {releaseDate}</p>
          <p>Retail price: {retail}</p>
        </div>
      </div>
    </div>
  )
}
