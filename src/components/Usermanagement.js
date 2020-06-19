import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loadingpage from './Loadingpage'
import SidebarDrawer from './SidebarDrawer'
import EditLink from './EditLink'
import { instance } from '../types/axios'

const Usermanagement = () => {
    const dispatch = useDispatch()
    const photo = useSelector(state => state.photo)
    const mng = useSelector(state => state.mng)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
        const all_users = async () => {
            const res = await instance.get('http://localhost:3000/api/v1/user/all_user')
            console.log(res)
            dispatch({ type: 'all_users', users: res.data })
        }

        all_users()
        setLoading(true)
    }, [])

    if (loading) {
        return (
            <div className="dashboard">
                <SidebarDrawer id={photo.id} />
                <div className="management dashboard-content">
                    <h5 className="user-list">Users List</h5>
                    <div className="list-body">
                        <table className="table table-hover table-bordered">
                            <thead className="bg-danger">
                                <tr>
                                    <th scope="col">College</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    mng.users ? (
                                        mng.users.map(({ _id, email, first_name, last_name, position, college, department }) => {
                                            return (
                                                <tr key={_id}>
                                                    <th>{college}</th>
                                                    <td>{first_name}</td>
                                                    <td>{last_name}</td>
                                                    <td>{department}</td>
                                                    <td>{position}</td>
                                                    <td>
                                                        <EditLink 
                                                        key={email} 
                                                        id={_id}
                                                        email={email}
                                                        fname={first_name} 
                                                        lname={last_name} 
                                                        position={position} 
                                                        college={college}
                                                        department={department}
                                                        />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                            <span>
                                                <td>No expenses</td>
                                            </span>
                                        )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Loadingpage />
    }
}

export default Usermanagement