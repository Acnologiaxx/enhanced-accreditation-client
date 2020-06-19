import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SidebarDrawer from './SidebarDrawer'
import Photo from './Photo'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loadingpage from './Loadingpage'


const Profile = () => {
    const auth = useSelector(state => state.auth)
    const photo = useSelector(state => state.photo)
    const dispatch = useDispatch()
    const [state, updateState] = useState({
        email: auth.user.email || '',
        fname: auth.user.first_name || '',
        lname: auth.user.last_name || '',
        position: auth.user.position || '',
        college: auth.user.college || '',
        department: auth.user.department || '',
        googleID: auth.user.googleId || '',
        token: auth.token || ''
    })
    const [disabled, setDisabled] = useState(true)
    const [upload, setUpload] = useState(false)
    const [avatar, setAvatar] = useState(undefined)
    const [isLoading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const prevStateRef = useRef();

    useEffect(() => {
        prevStateRef.current = state;
    });

    const prevState = prevStateRef.current;


    useEffect(() => {
        setUpload(!upload)
    }, [avatar])

    const onSave = async (e) => {
        e.preventDefault()
        setLoading(true)
        setDisabled(true)
        if (state === prevState) {
            setMessage('no changes made')
        } else {
            const res = await axios.patch('/api/update/user', {
                first_name: state.fname,
                last_name: state.lname,
                email: state.email,
                position: state.position,
                college: state.college,
                department: state.department
            })
            if (res) {
                setMessage('update success')
            } else {
                setMessage('Invalid data')
            }
        }

        setLoading(false)
    }

    const onUpload = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append(
            'avatar',
            avatar,
            avatar.name
        )

        const res = await axios.post('/api/avatar', formData)
        if (res) {
            dispatch({ type: 'added_photo', payload: res.data })
            setLoading(false)
            setUpload(!upload)
        }
    }



    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        updateState({
            ...state,
            [name]: value
        })
    }


    let btnClass = 'btn btn-success'
    if (disabled) {
        btnClass = 'btn btn-danger'
    }


    if (isLoading) {
        return <Loadingpage />
    } else {
        return (
            <div className="dashboard">
                <SidebarDrawer id={photo.id} />
                <div className="dashboard-content">
                    <form onSubmit={onUpload}>
                        <div className="prof-pic">
                            <Link to="/profile">
                                <Photo id={photo.id} />
                            </Link>
                            <input type="file" name="avatar" onChange={(e) => {
                                const file = e.target.files[0]
                                setAvatar(file)
                            }
                            } />
                            <button type="submit" className="btn btn-secondary" disabled={upload}>Upload</button>
                        </div>
                    </form>
                    <form onSubmit={onSave} className="profile-form bg-light border-secondary">
                        <div className="form-group">
                            <label htmlFor="username">First Name</label>
                            <input
                                type="text"
                                name="fname"
                                placeholder={auth.user.first_name}
                                value={state.fname}
                                onChange={handleChange}
                                className="form-control"
                                disabled={disabled}
                                autoFocus
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Last Name</label>
                            <input
                                type="text"
                                name="lname"
                                placeholder={auth.user.last_name}
                                value={state.lname}
                                onChange={handleChange}
                                className="form-control"
                                disabled={disabled}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder={auth.user.email}
                                value={state.email}
                                onChange={handleChange}
                                className="form-control"
                                disabled={disabled}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Position</label>
                            <input
                                type="text"
                                name="position"
                                placeholder={auth.user.position}
                                value={state.position}
                                onChange={handleChange}
                                className="form-control"
                                disabled
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">College</label>
                            <input
                                type="text"
                                name="college"
                                placeholder={auth.user.college}
                                value={state.college}
                                onChange={handleChange}
                                className="form-control"
                                disabled
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Department</label>
                            <input
                                type="text"
                                name="department"
                                placeholder={auth.user.department}
                                value={state.department}
                                onChange={handleChange}
                                className="form-control"
                                disabled
                            ></input>
                        </div>
                        <div className="profile-buttons">
                            <button onClick={(e) => {
                                e.preventDefault()
                                setDisabled(!disabled)
                            }} className={btnClass}>Edit</button>
                            <button type="submit" className="btn btn-primary" disabled={disabled}>Save</button>
                        </div>

                        {message && <p>{message}</p>}
                    </form>
                </div>
            </div>
        )
    }
}



export default Profile