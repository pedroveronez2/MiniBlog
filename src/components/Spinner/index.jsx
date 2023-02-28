import React from 'react'

function Spinner() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
  )
}

export default Spinner