import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loadingpage from './Loadingpage'
import SidebarDrawer from './SidebarDrawer'
import ActionButtons from './ActionButtons'
import ModalForm from './ModalForm'
import { instance } from '../types/axios'

const Accreditation = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const photo = useSelector(state => state.photo)
    const agency = useSelector(state => state.agency)
    const status = useSelector(state => state.status)
    const [lgShow, setLgShow] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [type, setType] = useState('Add')

    useEffect(() => {
        setLoading(false)
        const all_agency = async () => {
            const res = await instance.get('http://localhost:5000/api/v1/agency/agencies')
            dispatch({ type: 'all_agency' , agency: res.data})
        }
        console.log('hello')
        all_agency()
        setLoading(true)
    },[loading])

    useEffect(()=>{
        console.log('the type fired first')
    },[type])

    const action = (data) =>{
        setType(data)
    }
    
    const close = () => {
        setLgShow(false)
    }

    const updateError = (message) => {
        setError(message)
    }

    const onSubmit = async (data) => {
        setLoading(false)
        console.log(data)

        const res = await instance.post('http://localhost:5000/api/v1/agency', data)

        dispatch({ type: 'add_agency', agency: res.data })

        setLoading(true)
    }

    if (loading) {
        return (
            <div className="dashboard">
                <SidebarDrawer id={photo.id} />
                <div className="management dashboard-content">
                    <h5 className="user-list">Agency</h5>
                    <div className="list-body">
                        <button className="btn btn-primary" onClick={() => setLgShow(true)}>Add Agency</button>
                        <ModalForm 
                        lgShow={lgShow} 
                        close={close} 
                        name="agency" 
                        type={type}
                        setSubmit={onSubmit} 
                        setError={updateError}
                        ></ModalForm>
                        <table className="table table-hover table-bordered">
                            <thead className="bg-danger">
                                <tr>
                                    <th scope="col">Agency</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Status</th>
                                    { auth.user.position==='admin' && <th scope="col">Action</th>}
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    agency.agencies ? (
                                        agency.agencies.map(({ _id, agency_name, description }) => {
                                            return (
                                                <tr key={_id}>
                                                    <th>{agency_name}</th>
                                                    <td>{description}</td>
                                                    <td>0</td>
                                                    { auth.user.position==='admin' && (<td>
                                                        <ActionButtons
                                                            key={_id}
                                                            id={_id}
                                                            agency_name={agency_name}
                                                            description={description}
                                                            setSubmit={onSubmit} 
                                                            setError={updateError}
                                                        />
                                                    </td>)}
                                                </tr>
                                            )
                                        })
                                    ) : (
                                            <span>
                                                <td>No Agency</td>
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

export default Accreditation