import React, { useState } from 'react';

const RegistrationForm = (props) => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const [error, setError] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()
        if (user.password !== user.password_confirmation) {
            setError('Password does not match')
        } else {
            props.onSubmit({
                ...user
            })
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <form onSubmit={onSubmit} className="card bg-light border-secondary mx-auto">
            <div className="card-body">
                <div className="card-header text-center bg-light">
                    <span className="card-title bold">
                        Register
                            </span>
                </div>
                <div className="form-group">
                    <label htmlFor="username">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={user.first_name}
                        onChange={handleChange}
                        className="form-control"
                        autoFocus
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={user.last_name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        className="form-control"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        value={user.password_confirmation}
                        onChange={handleChange}
                        className="form-control"
                        required
                    ></input>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3">
                    <button type="submit" className="btn btn-primary">
                        Register
                        </button>
                </div>
                {error && <p>{error}</p>}
            </div>
        </form>
    );

}

export default RegistrationForm