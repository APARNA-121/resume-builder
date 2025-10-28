import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div style={{margin:'80px'}} className='shadow p-5 w-100 rounded text-center'>
      <h2>Name</h2>
      <h4>Job Title</h4>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E Mail</span>|<span className='mx-2'>Mobile</span></h6>
      <p className='my-3'>
        <a href="" target='_blank'>GITHUB</a> | 
        <a href="" target='_blank'>LINKEDIN</a> | 
        <a href="" target='_blank'>PORTFOLIO</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor accusamus nemo, optio doloribus aliquid odio nihil perspiciatis tempora facilis voluptas atque, rem, neque voluptatem sed ea incidunt? Ipsam, enim?</p>
      <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Education</Divider>
      <h6>Course Name</h6>
      <p><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout Year</span></p>
      <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Professional Experience</Divider>
      <h6>Job / Internship</h6>
      <p><span className='mx-2'>company name</span>|<span className='mx-2'>company location</span>|<span className='mx-2'>duration</span></p>
      <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Skills</Divider>
       <div className='d-flex flex-wrap justify-content-between my-3'>
         <Button variant="contained" className='m-1'>NODE JS</Button>
       </div>
    </div>
  )
}
export default Preview