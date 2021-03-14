import React, { useEffect } from 'react'
import './Layout.css'
import { auth } from '../../firebase.js'
import useUserState from '../../store/user.js'

import Menu from '../Menu'

export default function Layout({ children }) {
  const [, { setCurrentUser }] = useUserState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return (
    <div className='container'>
      <Menu />
      <div className='content__background'>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}
