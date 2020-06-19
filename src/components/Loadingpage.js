import React from 'react';
import { Spinner } from 'react-bootstrap'

const Loadingpage = () => {
  return (
    <div className="container">
      Loading...
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loadingpage