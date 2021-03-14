import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Layout from './Layout'
import SignUp from './SignUp'
import Login from './Login'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PrivateRoute path='/' exact component={Dashboard} />
          <PrivateRoute path='/sneakers' exact component={Dashboard} />
          <PrivateRoute path='/statistics' exact component={Dashboard} />
          <PrivateRoute path='/contact' exact component={Dashboard} />
          <PrivateRoute path='/about' exact component={Dashboard} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
