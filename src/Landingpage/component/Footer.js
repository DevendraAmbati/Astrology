import React from 'react'
import Img from "./Images/Sri_Shiva_Shakthi_Logo-01-removebg-preview.png";
import Img1 from "./Images/insta.png";
import { Link } from 'react-router-dom';
 import "./Footer.css";


import {
  FaFacebook,

  FaYoutube,
 
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {FaXTwitter} from "react-icons/fa6";

import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const courentyear = new Date().getFullYear();
  return (
    <div style={{backgroundColor:"rgb(255 193 7)"}}>
    
<footer className="text-center text-lg-start bg-purple text-muted mt-5 ">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
 
  </section>

  <section className="">
    <div className="container text-le text-start mt-3 ">
    
      <div className="row ">
    
        <div className="col-md-4 col-lg-4 col-xl- mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4 ">
          <Link to="/" onClick={scrollToTop}><img src={Img} alt='Logo' width="50%" /></Link>
         
          </h6>
          <p class=" text-white" style={{textAlign:"justify"}}>
               </p>
               
        </div>
   
        <div className="col-md-4 col-lg-4 col-xl-2 mx-auto mb-4 ">
    
          <h6 className="text-uppercase aline-start fw-bold mb-4  text-Black">
        QUICK LINKS
          </h6>
          <hr style={{color:"white" , }}/>
          <p>
            <Link to="/" className="  text-decoration-none textcolour text-white" onClick={scrollToTop}>Home</Link>
          </p>
          <p>
            <Link to="/Aboutus" className=" text-decoration-none textcolour text-white" onClick={scrollToTop}>About Us</Link>
          </p>
         
          <p>
            <Link to="/Gallery" className=" text-decoration-none textcolour text-white"  onClick={scrollToTop}>Gallery</Link>
          </p>
        
          <p>
            <Link to="/Contactus" className=" text-decoration-none textcolour text-white" onClick={scrollToTop}>Contact Us</Link>
          </p>
          
        </div>
 
     
  
        <div className="col-md-4 col-lg-4 col-xl- mx-auto mb-md-0 mb-4 textcolour">

          <h6 className="text-uppercase fw-bold mb-4 text-Black">Get In Touch</h6>
          <hr style={{color:"white" , }}/>
          <Link to="https://maps.app.goo.gl/TH5om9Mj5NA1WDoP9" className="text-white text-decoration-none"> SRI Shiva Shakthi JOYTHISHYA peetam,#10Groud floor  1st main 1st cross  opposite to Albek restaurant  Beside Tanishka Jewelry sampige road Malleswaram banglore
Branch's Jayanagar Banashankari 3rd stge white field</Link>
         <br/>
          {/* <p className="text-white text-decoration-none"><Link to="tel:6363298478" className='text-decoration-none text-white'>Call Us - 6363298478</Link></p> */}

          <div>
          <p className="text-white"><Link to="mailto: info-manjunathwastera5@gmail.com
" className='text-decoration-none text-white'><AiOutlineMail/> info-manjunathwastera5@gmail.com
</Link></p>
<div className='d-flex flex-wrap'>
          <p className=" text-decoration-none mx-1"><Link to="tel:9606602700 " className='text-decoration-none text-white'><BsFillTelephoneOutboundFill className='mx-1'/> 9606602700 </Link></p>
          <p className=" text-decoration-none"><Link to="tel:9740913366 " className='text-decoration-none text-white'><BsFillTelephoneOutboundFill className='mx-1'/> 9740913366</Link></p>
           </div></div>
    
          <a href="https://www.instagram.com/" target='_blank' style={{ color:"red"}} className="Instagram " >
        {/* <FaInstagram size={25} /> */} <img style={{ width: 25, height: 25 }} src={Img1}/>
      </a>

      <a href="https://www.facebook.com/profile.php?id=61553589212947" target='_blank'  style={{marginLeft:"10px"}}  >
        <FaFacebook size={25} /> 
      </a>

     
      <a href="https://www.youtube.com/channel/UCic_Z02q3PEOyW3GT9NVWOg" target='_blank'  style={{marginLeft:"10px",color:"red"}} className="Youtube ">
        <FaYoutube size={25} />
        
    
      </a>
      <a href="https://www.youtube.com/channel/UCic_Z02q3PEOyW3GT9NVWOg" target='_blank'  style={{marginLeft:"10px",color:"red"}} className="text-black ">
        <FaXTwitter size={25} />
        
    
      </a>

              

          
        </div>
        
        <hr></hr>

        <div className="text-center  p-1 " sbackground-color="rgba(0, 0, 0, 0.05)">
   
   <Link  to="/" onClick={scrollToTop} className="text-white fw-bold text-decoration-none" > Copyright © {courentyear}. SRI Shiva Shakthi JOYTHISHYA peetam

</Link>
   {/* <Link to="/Digitalmarketing" onClick={scrollToTop}>Read More</Link> */}
 </div>

      </div>

     
 
    </div>

  </section>



  

</footer>

    </div>
  )
}

export default Footer
