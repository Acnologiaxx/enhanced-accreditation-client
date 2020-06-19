import React from 'react'
import { useSelector } from 'react-redux'
import Loadingpage from './Loadingpage'
import SidebarDrawer from './SidebarDrawer'

const Requests = () => {
    const auth = useSelector(state => state.auth)
    const photo = useSelector(state => state.photo)
    console.log(photo.id)
    if (auth.authenticated) {
        return (
            <div className="dashboard">
                <SidebarDrawer id={photo.id} />
                <div className="dashboard-content">
                    Requests
                    </div>
            </div>
        )
    } else {
        return <Loadingpage />
    }
}

export default Requests