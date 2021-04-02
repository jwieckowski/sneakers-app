import React from 'react'
import './ProductItem.css'
import useUserState from '../../../../../store/user.js'
import useProductsState from '../../../../../store/products.js'
import useBoughtProductState from '../../../../../store/bought.js'
import useSoldProductState from '../../../../../store/sold.js'
import useObservedProductState from '../../../../../store/observed.js'

export default function ProductItem ({ details }) {
  const [{ user }, ] = useUserState()
  const [{ bought }, { removeBoughtProduct }] = useBoughtProductState()
  const [{ sold }, { removeSoldProduct }] = useSoldProductState()
  const [{ observed }, { addObservedProduct, removeObservedProduct } ] = useObservedProductState()
  const [, { setActiveProduct, setActiveModalProduct }] = useProductsState()
  const { image, name, releaseDate, retail } = details

  const isProductChecked = (checked, product) => checked.filter(p => p.uuid === product.uuid).length !== 0

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.nodeName === 'BUTTON') return
    setActiveProduct(details)
  }

  const handleBought = async (e) => {
    e.preventDefault()
    isProductChecked(bought, details)
      ? removeBoughtProduct(user, details)
      : setActiveModalProduct(details, 'bought')
  }

  const handleSold = async (e) => {
    e.preventDefault()
    isProductChecked(sold, details)
      ? removeSoldProduct(user, details)
      : setActiveModalProduct(details, 'sold')
  }

  const handleObserve = async (e) => {
    e.preventDefault()
    isProductChecked(observed, details)
      ? removeObservedProduct(user, details)
      : addObservedProduct(user, details)
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
        <div className='product__item__buttons'>
          <button className={`product__item__button ${isProductChecked(sold, details) ? 'product__item__button__active' : ''}`} onClick={handleSold}>sold</button>
          <button className={`product__item__button ${isProductChecked(bought, details) ? 'product__item__button__active' : ''}`} onClick={handleBought}>bought</button>
          <button className={`product__item__button ${isProductChecked(observed, details) ? 'product__item__button__active' : ''}`} onClick={handleObserve}>observe</button>
        </div>
      </div>
    </div>
  )
}
