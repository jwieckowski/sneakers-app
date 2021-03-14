import React from 'react'
import './ProfileInfo.css'
import { logOut } from '../../../common/auth.js'
import { Link, useHistory } from 'react-router-dom'
import useUserState from '../../../store/user.js'

export default function ProfileInfo () {
  const [{ user }, ] = useUserState()
  const history = useHistory()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logOut()
      history.push('/login')
    } catch {

    }
  }

  return (
    <div className='info__container'>
      <div className='info__user'>
        <p className='large__text'>{user.displayName ?? 'Profile'}</p>
        <p className='small__text'>{user.email}</p>
      </div>
      <div className='info__buttons'>
        <button>
          <Link to='/update-profile' className='info__link'>Update Profile</Link>
        </button>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  )
}
