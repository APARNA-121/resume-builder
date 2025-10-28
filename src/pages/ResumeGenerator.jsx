import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { IoDownloadSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


function ResumeGenerator() {
  return (
    <div className='container-fluid'>
        <h2 className='text-center mt-5'>Create a Job-Winning Resume in Minutes</h2>
        <div style={{height:'60vh'}} className="row justify-content-center align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-4 border rounded shadow p-5 text-center" >
          <IoDocumentText className='fs-1 mb-3' />
          <h4>Add your information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 border rounded shadow p-5 text-center">
          <IoDownloadSharp className='fs-1 mb-3' />
          <h4>Download your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>

        </div>
        <div className="col-md-1"></div>
        </div>
        <div className='text-center mb-5'>
           <Link to={'/form'} className='btn text-white' style={{backgroundColor:'purple'}}>LET'S START </Link>
        </div>
    </div>
  )
}

export default ResumeGenerator