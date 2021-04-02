import React from 'react'
import './ProductItemDB.css'

export default function ProductItemDB ({ image, name, releaseDate, uuid }) {
  return (
    <div className='products__item__db__element' key={uuid}>
      <div className='products__item__db__details'>
        <div>
            <img src={image} alt={name} className='products__item__db__element__image'/>
        </div>
        <div className='products__item__db__element__info'>
            <div className='products__item__db__element__info__top'>
            <span className='products__item__db__element__info__top__name'>
                {name}
            </span>
            <span>
                Release: {releaseDate}
            </span>
            </div>
        </div>
      </div>
      <div className='product__item__db__buttons'>
        <button className='product__item__db__button'>update</button>
        <button className='product__item__db__button'>remove</button>
      </div>
    </div>
  )
}
