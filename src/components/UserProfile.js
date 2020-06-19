import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loadingpage from './Loadingpage'
import SidebarDrawer from './SidebarDrawer'
import { instance } from '../types/axios'

const UserProfile = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const photo = useSelector(state => state.photo)
    const mng = useSelector(state => state.mng)
    const [id, setId] = useState(props.match.params.id)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [single, setUser] = useState({
        fname: props.location.fname || '',
        lname: props.location.lname || '',
        email: props.location.email || '',
        college: props.location.college || '',
        department: props.location.department || '',
        position: props.location.position || ''
    })

    const [message, setMessage] = useState('')

    const prevStateRef = useRef();

    useEffect(() => {
        prevStateRef.current = single;
    });

    const prevState = prevStateRef.current;

    const onSave = async (e) => {
        e.preventDefault()
        setLoading(true)
        setDisabled(true)
        if (single === prevState) {
            setMessage('no changes made')
        } else {
            const res = await instance.patch(`http://localhost:3000/api/v1/user/${id}`, {
                first_name: single.fname,
                last_name: single.lname,
                email: single.email,
                position: single.position,
                college: single.college,
                department: single.department
            })
            if (res) {
                setMessage('update success')
            } else {
                setMessage('Invalid data')
            }
        }

        setLoading(false)
    }

    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setUser({
            ...single,
            [name]: value
        })
    }


    let btnClass = 'btn btn-success'
    if (disabled) {
        btnClass = 'btn btn-danger'
    }

    if (loading) {
        return <Loadingpage />
    } else {
        return (
            <div className="dashboard">
                <SidebarDrawer id={photo.id} />
                <div className="dashboard-content">
                    <h5>Profile</h5>
                    <form onSubmit={onSave} className="profile-form bg-light border-secondary">
                        <div className="form-group">
                            <label htmlFor="username">First Name</label>
                            <input
                                type="text"
                                name="fname"
                                placeholder={mng.single.first_name}
                                value={single.fname}
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
                                placeholder={mng.single.last_name}
                                value={single.lname}
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
                                placeholder={mng.single.email}
                                value={single.email}
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
                                placeholder={mng.single.position}
                                value={single.position}
                                onChange={handleChange}
                                className="form-control"
                                disabled={disabled}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">College</label>
                            <input
                                type="text"
                                name="college"
                                placeholder={mng.single.college}
                                value={single.college}
                                onChange={handleChange}
                                className="form-control"
                                disabled={disabled}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Department</label>
                            <input
                                type="text"
                                name="department"
                                placeholder={mng.single.department}
                                value={single.department}
                                onChange={handleChange}
                                className="form-control"
                                disabled={disabled}
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

export default UserProfile