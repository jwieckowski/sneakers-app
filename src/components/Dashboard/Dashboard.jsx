import React from 'react'
import './Dashboard.css'
import { useLocation } from 'react-router-dom'

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
  const location = useLocation()

  return (
    <div className='dashboard__container'>
      <ProfileInfo />
      <div className='dashboard__content'>
        {getContent(location.pathname)}
      </div>
    </div>
  )
}
