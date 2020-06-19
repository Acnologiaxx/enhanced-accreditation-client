import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'


const Header = (props) => {
    const auth = useSelector(state=> state.auth)

    const renderContent = () => {
        switch (auth.authenticated) {
            case null:
                return <li className="logo-link" >
                    <Spinner animation="border" role="status">
                    </Spinner>
                </li>
            case false:
                return (
                    <li>
                        <Link className="logo-link" to="/login">Login</Link>
                    </li>
                )
            default:
                return (
                    <li>
                        <a className="logo-link" >Logout</a>
                    </li>
                )
        }
    }

    return (
        <header className="toolbar fixed-top">
            <nav className="toolbar__navigation">
                <div className="toolbar__logo">
                    <Link
                        to={auth.authenticated ? '/dashboard' : '/'}
                        className="link-title"
                    >
                        My.IIT
                        </Link>
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        {renderContent()}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header