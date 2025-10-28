import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px', backgroundColor:'purple', color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <h3>Contact Us</h3>
        <h5 className="fw-bolder"><MdEmail /> resumebuilder@gmail.com</h5>
        <h5 className="fw-bolder"><FaPhoneAlt /> 8125496578</h5>
        <h6>Connect With Us</h6>
        <div className="d-flex justify-content-center fs-4 my-3">
            <FaWhatsapp className='mx-4' />
            <FaInstagram />
            <FaFacebook className='mx-4' />
        </div>
        <p>Designed and built with ❤️ using React</p>
    </div>
  )
}

export default Footer