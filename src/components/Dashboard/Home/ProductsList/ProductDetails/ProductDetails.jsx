import React from 'react'
import './ProductDetails.css'
import useProductsState from '../../../../../store/products.js'

export default function ProductDetails () {
  const [{ activeProduct }, { setActiveProduct } ] = useProductsState()
  const { image, name, releaseDate, retail, market } = activeProduct || {}

  console.log(market)

  const handleClose = (e) => {
    e.preventDefault()
    setActiveProduct(undefined)
  }

  return (
    <div className={`product__details__container ${activeProduct ? 'slide-in' : ''}`}>
      <button className='product__details__close' onClick={handleClose}>X</button>
      <div className="product__details__name">
        <h3>{name}</h3>
      </div>
      <div className='product__details__base__info'>
        <img
          src={image}
          alt={name}
          className='product__details__image'
        />
        <div>
          <p>Release date: {releaseDate}</p>
          <p>Retail price: {retail}</p>
        </div>
      </div>
    </div>
  )
}
