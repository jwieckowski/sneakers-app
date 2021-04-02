import React from 'react'
import './About.css'

import urls from '../../../common/urls.js'

export default function About () {
  return (
    <div className='about__container'>
      <div className='about__text'>
        This website was made for sneakers resellers to
        simplify the process of registering sold and bought
        products and to enable controlling the income and outcome.
      </div>

      <div className='about__text'>
        As a user, you can login into the application, change profile
        details, search for products from StockX database, add products
        you want to observe or check them as bought or sold. It is possible
        to check how your profits raise in time in the Statistics page.
      </div>

      <div className='stockx__information'>
        <img src={urls.stockx} alt='stockx' className='about__image'/>
        <p>
          To provide such a functionalities, I used the StockX-API
          to get information about newest products and their market value.
        </p>
      </div>

      <div>
        <p className='about__image__label'>Main technologies</p>
        <div className='about__image__container'>
          <img src={urls.react} alt='react' className='about__image'/>
          <img src={urls.html} alt='html' className='about__image'/>
          <img src={urls.css} alt='css' className='about__image'/>
        </div>
      </div>

      <div>
        <p className='about__image__label'>Authentication and database</p>
        <div className='about__image__container'>
          <img src={urls.firebase} alt='firebase' className='about__image'/>
          <img src={urls.auth} alt='firebase authentication' className='about__image'/>
          <img src={urls.db} alt='firebase realtime database' className='about__image'/>
        </div>
      </div>
    </div>
  )
}
