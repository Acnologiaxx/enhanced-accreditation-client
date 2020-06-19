import React, { useState, useEffect } from 'react'
import logo from '../img/logoogle.png'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loadingpage from './Loadingpage'

const Login = (props) => {
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)



    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await axios.post('/api/v1/user/login', credentials, {withCredentials: true})
        dispatch({ type: 'login_user', payload: res.data })
        setLoading(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    if (loading) {
        return <Loadingpage />
    }
    return (
        <div className="container top-space">
            <form onSubmit={onSubmit} className="card bg-light border-secondary mx-auto">
                <div className="card-body">
                    <div className="card-header text-center bg-light"><span className="card-title bold">Login</span></div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="form-control"
                            autoFocus
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={handleChange}
                            className="form-control"
                            required
                        ></input>
                    </div>
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <button type="submit" className="btn btn-primary spaces-login">Login</button>
                        <Link className="btn btn-primary spaces-login" to="/register">Register</Link>
                        <div className="google-signin">
                            <img src={logo} alt="Logo" />
                            <a className="btn btn-primary item spaces-login" href="http://localhost:5000/auth/google">Sign in with Google</a>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login