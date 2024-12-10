import React from 'react'
import {Link} from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div>
      <div>404 Not Found</div>
      <div> 
          <Link to='/'>Go to Home</Link>
      </div>
    </div>


  )
}
