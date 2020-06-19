import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { FETCH_USER, LOAD_PHOTO } from '../types/types'
import { instance } from '../types/axios'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Login from './Login'
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Usermanagement from './Usermanagement'
import Accreditation from './Accreditation'
import Requests from './Requests'
import Messages from './Messages'
import UserProfile from './UserProfile'
import Chat from './Chat'

const App = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()



    useEffect(() => {
        const fetchUser = async () => {
            const res = await instance.get('http://localhost:5000/api/v1/user/current_user')
            dispatch({ type: FETCH_USER, payload: res.data })
        }

        const all_users = async () => {
            const res = await instance.get('http://localhost:5000/api/v1/user/all_user')
            console.log(res)
            dispatch({ type: 'all_users', users: res.data })
        }

        const all_agency = async () => {
            const res = await instance.get('http://localhost:5000/api/v1/agency/agencies')
            dispatch({ type: 'all_agency', agency: res.data })
        }

        fetchUser()
        all_users()
        all_agency()
    }, [])

    useEffect(() => {
        const fetchAvatar = async () => {
            const res = await instance.get('http://localhost:5000/api/v1/avatar/me')
            dispatch({ type: LOAD_PHOTO, payload: res.data })
        }
        fetchAvatar()
    }, [])
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <PublicRoute restricted={false} exact path="/" component={Home} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PublicRoute restricted={false} path="/login" component={Login} />
                    <PublicRoute restricted={false} path="/register" component={Register} />
                    <PrivateRoute path="/management" component={Usermanagement} />
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/accreditation" component={Accreditation} />
                    <PrivateRoute path="/requests" component={Requests} />
                    <PrivateRoute path="/messages" component={Messages} />
                    <PrivateRoute path="/users/:id" component={UserProfile} />
                    <PrivateRoute path="/chat" component={Chat} />
                </div>
            </BrowserRouter>
        </div>
    )

}



export default App
