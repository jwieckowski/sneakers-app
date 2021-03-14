import React from 'react'
import './PrivateRoute.css'
import { Route, Redirect } from 'react-router-dom'
import useUserState from '../../store/user.js'

export default function PrivateRoute({ component: Component, ...rest }) {
  const [{ user }, ] = useUserState()
  return (
    <div className='private__content'>
      <Route
        {...rest}
        render={props => {
          return user
            ? <Component {...props} />
            : <Redirect to='/login' />
        }}
      >
      </Route>
    </div>
  )
}
