import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
  const auth = useSelector(state => state.auth)
  return (

      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => (
          auth.authenticated ?
              <Component {...props} />
          : <Redirect to="/dashboard" />
      )} />
  )
}
export default PrivateRoute
