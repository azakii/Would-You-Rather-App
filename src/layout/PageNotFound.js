import React from 'react'
import Error from "../assets/img/404.gif";

const PageNotFound = () => {
    return (
        <div className="error text-center">
          <div className="container mt-5">
            <img 
            src={Error}
            alt="Not found" />
          </div>
        </div>
    )
}

export default PageNotFound