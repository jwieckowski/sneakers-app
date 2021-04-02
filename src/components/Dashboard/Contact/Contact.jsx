import React from 'react'
import './Contact.css'

import urls from '../../../common/urls.js'

export default function Contact () {
  return (
    <div className='contact__container'>
      <div className='contact__text'>
        Please feel free to contact me if you have any questions
        or found any bugs when using this website and enjoy using!
      </div>

      <div>
        <div className='contact__element'>
          <img src={urls.email} alt='email' className='about__image' />
          <p>kubaw1@onet.eu</p>
        </div>
        <div className='contact__element'>
          <img src={urls.phone} alt='phone' className='about__image' />
          <p>504 475 476</p>
        </div>
        <a href='https://www.facebook.com/kuba.wieckowski.10/' _target='blank'>
          <div className='contact__element'>
            <img src={urls.facebook} alt='facebook' className='about__image' />
            <p>kuba.wieckowski.10</p>
          </div>
        </a>
      </div>

      <div className='contact__text'>
        If you are interested of how more of my application looks like
        and how they are performing, please check my github account
        or write me an e-mail to the given address.
      </div>

      <div>
        <a href='https://github.com/jwieckowski' _target='blank'>
          <div className='contact__element'>
            <img src={urls.github} alt='github' className='about__image' />
            <p>jwieckowski</p>
          </div>
        </a>
      </div>
    </div>
  )
}
