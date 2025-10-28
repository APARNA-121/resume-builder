import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div>

      {/* landing part */}
      <section style={{width:'100%', height:'100vh',backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment:'fixed', backgroundPosition:'top', backgroundSize:'cover'}} className="container-fluid row align-items-center" >
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
            <h3>Designed to get hired. Your skills, your story, your next job - all in one.</h3>
            <Link to={'/resume'} className='btn text-white' style={{backgroundColor:'purple'}}>Make Your Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>

      {/* tools */}
      <section className='m-5'>
        <h1 className='text-center'>Tools</h1>
        <div className=" row container align-items-center">
        <div className='col-md-6'>
          <div className='my-3'>
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
          </div>
           <div className='my-3'>
            <h4>Cover Letter</h4>
            <p>Easily write professional cover letters.</p>
          </div>
           <div className='my-3'>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
          </div>
           <div className='my-3'>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          </div>
        <div className='col-md-6'>
          <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume" />
        </div>
        </div>
      </section>

      {/* image */}
      <section style={{height:'500px', width:'100%', backgroundImage:"url('https://trafft.com/wp-content/uploads/2021/02/meeting-header.jpg')", backgroundPosition:'top', backgroundAttachment:'fixed', backgroundSize:'cover'}}></section>

      {/* testimony */}

      <section className='m-5'>

        <h1 className="text-center my-5">Testimony</h1>
        <div className='row container'>
          <div className='col-md-5'>
            <h3>Trusted by professional worldwide.</h3>
            <p className='fs-5' style={{textAlign:"justify"}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p> 
            <p className='fs-5' style={{textAlign:"justify"}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p>
            <p className='fs-5' style={{textAlign:"justify"}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-real-young-woman-260nw-2274107825.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/redhead-girl-became-interested-260nw-1309998274.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330516.jpg?w=360" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOKopzizWCGH2gVGkT6oAPnkYdiWRsUfLJA&s" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lAsaRkY1bio7NHqRCtay8n-WZSMXHGBpcA&s" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/passport-photo-man-on-white-260nw-2538513719.jpg" alt="person" />
              </div>
            </div>
          </div>
          </div>
         
      </section>

    </div>
  )
}

export default LandingPage