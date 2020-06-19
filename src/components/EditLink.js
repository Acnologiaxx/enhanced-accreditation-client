import React from 'react'
import { Link } from 'react-router-dom'

const EditLink = ({ id, fname, email, lname, college, position, department }) => {
    const newTo = {
        pathname: `/users/${id}`,
        fname,
        lname,
        email,
        college,
        position,
        department,
        id
    }

    return (
        <Link to={newTo} className="btn btn-danger">
            Edit
        </Link>
    )
}

export default EditLink