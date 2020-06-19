import React from 'react'
import { useSelector } from 'react-redux'
import Loadingpage from './Loadingpage'
import SidebarDrawer from './SidebarDrawer'

const Dashboard = () => {
    const auth = useSelector(state=>state.auth)
    const photo = useSelector(state=>state.photo)
    if (auth.authenticated) {
        return (
            <div className="dashboard">
                <SidebarDrawer id={photo.id}/>
                <div className="dashboard-content">
                    Hi Everything!
                    </div>
            </div>
        )
    } else {
        return <Loadingpage />
    }

}

export default Dashboard