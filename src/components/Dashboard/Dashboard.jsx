import React, { useEffect } from 'react'
import './Dashboard.css'
import { useLocation } from 'react-router-dom'

import useUserState from '../../store/user.js'
import useBoughtProductState from '../../store/bought.js'
import useObservedProductState from '../../store/observed.js'
import useSoldProductState from '../../store/sold.js'

import ProfileInfo from './ProfileInfo'
import Home from './Home'
import Sneakers from './Sneakers'
import Statistics from './Statistics'
import Contact from './Contact'
import About from './About'

const getContent = (path) => {
  const content = {
    '/': <Home />,
    '/sneakers': <Sneakers />,
    '/statistics': <Statistics />,
    '/contact': <Contact />,
    '/about': <About />
  }

  return content[path] ?? 'Path error'
}

export default function Dashboard () {
  const [{ user }, ] = useUserState()
  const [, { getBoughtProducts } ] = useBoughtProductState()
  const [, { getObservedProducts } ] = useObservedProductState()
  const [, { getSoldProducts } ] = useSoldProductState()
  const location = useLocation()

  useEffect(() => {
    getBoughtProducts(user)
    getObservedProducts(user)
    getSoldProducts(user)
  }, [])

  return (
    <div className='dashboard__container'>
      <ProfileInfo />
      <div className='dashboard__content'>
        {getContent(location.pathname)}
      </div>
    </div>
  )
}
