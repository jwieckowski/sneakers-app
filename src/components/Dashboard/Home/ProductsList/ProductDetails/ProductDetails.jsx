import React from 'react'
import './ProductDetails.css'
import useProductsState from '../../../../../store/products.js'

const formatDate = (saleDate) => {
  if (saleDate === undefined || saleDate === '') return
  return saleDate.substr(0, 10)
}

export default function ProductDetails () {
  const [{ activeProduct }, { setActiveProduct } ] = useProductsState()
  const { image, name, releaseDate, retail, market } = activeProduct || {}
  const {
    deadstockSold,
    totalDollars,
    averageDeadstockPrice,
    highestBid,
    lowestAsk,
    lowestAskSize,
    lastSale,
    lastSaleSize,
    lastSaleDate,
    numberOfAsks,
    numberOfBids,
    changePercentage
  } = market || ''

  const handleClose = (e) => {
    e.preventDefault()
    if(!e.target.className.includes('close') && !e.target.className.includes('overlay')) return
    setActiveProduct(undefined)
  }

  return (
    <div
      className={`product__details__container__overlay ${activeProduct ? 'slide-in-overlay' : ''}`}
      onClick={handleClose}
    >
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
            <p>Release date: <span className='value'>{releaseDate}</span></p>
            <p>Retail price: <span className='value'>{retail}</span></p>
          </div>
        </div>
        <div className='product__details__market__info'>
          <div className='product__details__market__values'>
            <p>Sold pairs: <span className='value'>{deadstockSold}</span></p>
            <p>Total dollars: <span className='value'>{totalDollars}</span></p>
          </div>
          <div className='product__details__market__values'>
            <p>Number of asks: <span className='value'>{numberOfAsks}</span></p>
            <p>Number of bids: <span className='value'>{numberOfBids}</span></p>
          </div>
          <div className='product__details__market__values'>
            <p>Average price: <span className='value'>{averageDeadstockPrice}</span></p>
            <p>Highest bid: <span className='value'>{highestBid}</span></p>
          </div>
          <div className='product__details__market__values'>
            <p>Lowest ask: <span className='value'>{lowestAsk}</span></p>
            <p>Lowest ask size: <span className='value'>{lowestAskSize}</span></p>
          </div>
          <div className='product__details__market__values'>
            <p>Last sale: <span className='value'>{lastSale}</span></p>
            <p>Price change: <span className='value'>{changePercentage}</span></p>
          </div>
          <div className='product__details__market__values'>
            <p>Last sale size: <span className='value'>{lastSaleSize}</span></p>
            <p>Last sale date: <span className='value'>{formatDate(lastSaleDate)}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
