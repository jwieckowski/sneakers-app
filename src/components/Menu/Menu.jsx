import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='menu__container'>
      <div className='menu__logo__container'>
        <img
          className='menu__logo'
          src={'https://snkryard.com/logos/snkrs-logo.png'}
          alt='Sneakers logo'
        />
      </div>
      <ul className='menu__list'>
        <li className='menu__list__item'>
          <Link to='/' className='menu__link'>Home</Link>
        </li>
        <li className='menu__list__item'>
          <Link to='/sneakers' className='menu__link'>Sneakers</Link>
        </li>
        <li className='menu__list__item'>
          <Link to='/statistics' className='menu__link'>Statistics</Link>
        </li>
        <li className='menu__list__item'>
          <Link to='/about' className='menu__link'>About</Link>
        </li>
        <li className='menu__list__item'>
          <Link to='/contact' className='menu__link'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}
