import React from 'react';
import Navbar from './navbar';
import { Link } from "react-router-dom";
 import './Career.css';
import { BsPersonCircle,BsPersonVcard,BsCurrencyRupee,BsClipboardFill ,BsDatabaseFillGear,BsLaptopFill } from "react-icons/bs";

const Career = () => {
  return (
    <div> 
        
        <div className='careeru'>

        <h1 className="text-center  mt-5 mb-3" >
      <b>Career With Us</b>
      </h1>
              
        </div>
        <div className='row'>
        <div className='col-lg-4'></div>
        <div className='col-lg-4'>
        <div className='card p-5 mt-5'>
        <div >
            <Link to="/Contactus" className='text-decoration-none text-black'>
            <h3 ><BsPersonCircle/>  Human Resources (HR)</h3>
            </Link>
        </div>
        <div>
            <Link to="/Contactus"  className='text-decoration-none text-black'>
            <h3 ><BsPersonVcard/>   Accounting</h3>
            </Link>
        </div>
        <div>
        <Link to="/Contactus"  className='text-decoration-none text-black'>
            <h3><BsCurrencyRupee/>  Finance</h3>
            </Link>
        </div>
        <div>
        <Link to="/Contactus"  className='text-decoration-none text-black'>
            <h3 ><BsClipboardFill/>  Markting/Sales</h3>
            </Link>
        </div>
        <div>
        <Link to="/Contactus"  className='text-decoration-none text-black'>
            <h3 ><BsDatabaseFillGear/>  Operations</h3>
            </Link>
        </div>
        <div>
        <Link to="/Contactus"  className='text-decoration-none text-black'>
            <h3 ><BsLaptopFill/>  Information Technology (IT)</h3>
            </Link>
        </div>
        </div>
        </div>
        <div className='col-lg-4'></div>
        </div>
    </div>
  )
}

export default Career;