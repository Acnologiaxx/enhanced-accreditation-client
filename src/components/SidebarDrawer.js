import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Photo from './Photo'
import { Link } from 'react-router-dom'
import { FcFolder, FcDataConfiguration, FcSms, FcPortraitMode } from 'react-icons/fc'
import { useSelector } from 'react-redux'

const SidebarDrawer = (props) => {
    const auth = useSelector(state => state.auth)
    return (
        <div className="sidebar-drawer">
            <div className="profile-logo">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click to change picture!</Tooltip>}>
                    <Link to="/profile">
                        <Photo id={props.id} />
                    </Link>
                </OverlayTrigger>
            </div>
            <ul>
                <li>
                    <FcFolder />
                    <Link to="/accreditation">
                        Accreditation
                        </Link>
                </li>
                <li>
                    <FcDataConfiguration />
                    <Link to="/requests">
                        Requests
                        </Link>
                </li>
                <li>
                    <FcSms />
                    <Link to="/messages">
                        Messages
                        </Link>
                </li>
                { auth.user.position==='admin' && <li>
                    <FcPortraitMode />
                    <Link to="/management">
                        Manage Users
                    </Link>
                </li> }
            </ul>
        </div>
    )
}


export default SidebarDrawer