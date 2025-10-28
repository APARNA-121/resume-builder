import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center p-5 my-3 flex-column'>
      <img width={'40%'} src="https://shop.sesto.ir/wp-content/uploads/2022/10/funny-404-error-page-design.gif" alt="page not found" />
      <h1>404!</h1>
      <h4>Page Not Found</h4>
      <Link className='btn btn-success' to={'/'}>Go to Home</Link>
    </div>
  )
}

export default Pnf