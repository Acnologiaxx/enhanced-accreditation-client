import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditModalForm from './EditModalForm'

const ActionButtons = ({ id, agency_name, description, name, setError, setSubmit }) => {
    const [boolean, setBoolean] = useState(false)
    const [type, setType] = useState('edit')
    const newTo = {
        pathname: `/agency/${id}`,
        agency_name,
        description,
        id
    }

    const handleClose = () => {
        setBoolean(false)
    }

    const handleEdit = () => {
        setBoolean(true)
    }

    return (
        <div className="action-button">
            <Link to={`/agency/${id}`} className="btn btn-success">
                Manage
        </Link>
            <button className="btn btn-success" onClick={handleEdit}>
                Edit
            </button>
            <EditModalForm
                lgShow={boolean}
                close={handleClose}
                name="agency"
                setSubmit={setSubmit}
                setError={setError}
                type={type}
            ></EditModalForm>
            <button className="btn btn-danger"> Delete</button>
        </div>
    )
}

export default ActionButtons