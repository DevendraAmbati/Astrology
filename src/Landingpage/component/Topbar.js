import React from 'react';
import './Top.css'; // You can create a CSS file for styling
import { Link } from 'react-router-dom';
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  
} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import Img from "./Images/insta.png";

function Topbar() {
  return (
    <div className='Top container-fluid '>
        <div className='row'>
         
            <div className='display'>
              
              <div className='col-lg-9 '>
              <div className='display text-black  ' >
                <div className=''>
        <Link to="mailto:manjunathwastera5@gmail.com" className=' p-2 text-decoration-none text-black  '><AiOutlineMail/>info-manjunathwastera5@gmail.com</Link>
        </div>
     <div className="  ">
       
        <Link to="tel:+91 9606602700" className='phone ' ><h2  className='p-1 phone text-decoration-none  ' > <BiSolidPhoneCall/>  +91-9606602700 </h2></Link>
  
            
      </div>
      <div className="  ">
          
          <Link to="tel:+91 9740913366 " className='phone ' ><h2  className='p-1 phone  text-decoration-none'  ><BiSolidPhoneCall/> +91-9740913366 </h2></Link>
    
                      
        </div>
        </div>
              </div>
   
     
              <div className='col-lg-3 p-1'>
              <a href="https://www.instagram.com/	" target='_blank' style={{marginRight:"10px", color:"red"}} className="Instagram " >
        {/* <FaInstagram size={25} /> */} <img style={{ width: 25, height: 25 }} src={Img}/>
      </a>

      <a href="https://www.facebook.com/	" style={{marginLeft:"10px"}} className="Facebook " >
        <FaFacebook size={25} /> 
      </a>

  
      <a href="https://www.youtube.com/" style={{marginLeft:"10px",color:"red"}} className="Youtube ">
        <FaYoutube size={25} />
        
    </a>
    <a href="https://www.youtube.com/channel/UCic_Z02q3PEOyW3GT9NVWOg" target='_blank'  style={{marginLeft:"10px",color:"red"}} className="text-black ">
        <FaXTwitter size={25} />
        
    
      </a>
              </div>
              </div>
              </div>
           
              </div>
              
              
  );
}

export default Topbar;
