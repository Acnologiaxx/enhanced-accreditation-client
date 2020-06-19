import React from 'react'
import { useSelector } from 'react-redux'
import Loadingpage from './Loadingpage'
import SidebarDrawer from './SidebarDrawer'

const Messages = () => {
    const auth = useSelector(state => state.auth)
    const photo = useSelector(state => state.photo)
    console.log(photo.id)
    if (auth.authenticated) {
        return (
            <div className="dashboard">
                <SidebarDrawer id={photo.id} />
                <div className="dashboard-content">
                    <h5>Messages</h5>
                    <div className="container top-space">
                        <div className="card bg-light border-secondary">
                            <div className="card-body">
                            <div className="card-header text-center bg-light"><span className="card-title bold">Messages</span></div>
                            <div className="form-group">
                                <label>Jason</label>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Loadingpage />
    }
}

export default Messages