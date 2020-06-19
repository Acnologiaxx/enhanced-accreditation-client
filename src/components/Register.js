import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RegistrationForm from './RegistrationForm'
import axios from 'axios'
import Loadingpage from './Loadingpage'

const Register = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (userObject) => {
        setLoading(true)
        const res = await axios.post('/api/register', userObject)
        dispatch({ type: 'register_user', payload: res.data })
        setLoading(false)
        alert(`${res.data.error}`)
    }

    if(loading) {
        return <Loadingpage />
    } else {
        return (
            <div className="container top-space">
                <RegistrationForm onSubmit={onSubmit} />
            </div>
        )
    }

}

export default Register