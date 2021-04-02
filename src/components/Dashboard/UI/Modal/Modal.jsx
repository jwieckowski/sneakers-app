import React, { useState } from 'react'
import './Modal.css'
import useUserState from '../../../../store/user.js'
import useProductsState from '../../../../store/products.js'
import useSoldProductState from '../../../../store/sold.js'
import useBoughtProductState from '../../../../store/bought.js'

export default function Modal() {
  const initState = {
    boughtPrice: 1,
    soldPrice: 1
  }
  const [prices, setPrices] = useState(initState)
  const [{ user }, ] = useUserState()
  const [, { addBoughtProduct }] = useBoughtProductState()
  const [, { addSoldProduct }] = useSoldProductState()
  const [{ activeModalProduct, modalType }, { setActiveModalProduct } ] = useProductsState()

  const handleCancel = (e) => {
    e.preventDefault()
    if(!e.target.className.includes('close') && !e.target.className.includes('overlay')) return
    setActiveModalProduct(undefined, undefined)
    setPrices(initState)
  }

  const handleConfirm = (e) => {
    e.preventDefault()
    const product = {
      ...activeModalProduct,
      ...prices,
      date: new Date().toISOString().slice(0, 10)
    }
    modalType === 'sold'
      ? addSoldProduct(user, product)
      : addBoughtProduct(user, product)

    setActiveModalProduct(undefined, undefined)
    setPrices(initState)
  }

  return (
    <div
      className={`modal__container__overlay ${activeModalProduct ? 'slide-in-overlay' : ''}`}
      onClick={handleCancel}
    >
      <div className={`modal__container ${activeModalProduct ? 'slide-in' : ''}`}>
        <div className='modal__product'>
          {activeModalProduct?.name}
        </div>
        <div className='modal__container__inputs'>
          <div className='modal__container__input'>
            <p className='modal__label'>Bought price: </p>
            <input
              type='number'
              placeholder='Bought price'
              className='form__input modal__input'
              onChange={(e) => setPrices({
                  soldPrice: prices.soldPrice,
                  boughtPrice: parseFloat(e.target.value)
                })}
                min={1}
              />
            </div>
            {
            modalType === 'sold'
            ?
            <div className='modal__container__input'>
              <p className='modal__label'>Sold price: </p>
              <input
                  type='number'
                  placeholder='Sold price'
                  className='form__input modal__input'
                  onChange={(e) => setPrices({
                        soldPrice: parseFloat(e.target.value),
                        boughtPrice: prices.boughtPrice
                      })}
                    min={1}
                />
              </div>
              : ''
            }
          </div>
          <div className='modal__container__buttons'>
            <button className='modal__button close' onClick={handleCancel}>Cancel</button>
            <button className='modal__button' onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      </div>
      )
    }
