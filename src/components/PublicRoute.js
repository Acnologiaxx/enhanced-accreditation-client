import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  const auth = useSelector(state => state.auth)
  return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route {...rest} render={props => (
          auth.authenticated && restricted ?
              <Redirect to="/" />
          : <Component {...props} />
      )} />
  )
}

export default PublicRoute
