import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'

const ModalForm = ({ lgShow, close, name, setSubmit, type }) => {
    const [data, setData] = useState({
        agency_name: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSubmit(data)
        close()
    }

    return (

        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={close}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add {name}
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubmit} className="bg-light border-secondary">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="names">{name}</label>
                                <input
                                    type="text"
                                    name="agency_name"
                                    placeholder={`${name} name`}
                                    className="form-control"
                                    autoFocus
                                    value={data.agency_name}
                                    onChange={handleChange}
                                    required
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Description"
                                    value={data.description}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                ></input>
                            </div>
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <button type="submit" className="btn btn-primary spaces-login">Add</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalForm