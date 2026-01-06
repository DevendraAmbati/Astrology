import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img from "./Images/img1.webp";
 import Carousels from '../component/Carousels';
import Testimonial from '../component/Testimonial';
import Technology from '../component/Technology';
// import Img2 from "./Images/gen1.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Topbar from './Topbar';
import CollapsibleExample from './navbar';

import Img1 from "./Images/set1.jpg";
import Img2 from "./Images/bedding.jpg";
import Img3 from "./Images/set3.jpg";
import Img4 from "./Images/card1.jpg";
import { blue, blueGrey } from '@mui/material/colors';



function Home() {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    });
  
    return (
        <div>

       <div className="container-fluid">
      

      <div className="row align-items-center">

       




        {/*======================================= */}



        <div className="container mt-3">
        <div className="row">
          <div className="careeru col-md-12 text-center">
            
            <h2>
              <b className=''style={{color:'rgba(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)', fontFamily:'cursive'}}>OTHER PRODUCTS</b>
            </h2>

           
          </div>
        </div>
      </div>


        <section>
        <div className='container-fluid '>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-5 g-1 mt-5'>
                  <img src={Img2} width="100%" className='' alt='ssssssssssssddfssssss'data-aos="fade-right" />


                </div>
                <div className='col-lg-7  mt-5'>

                  <h2 className='' style={{color:'rgba(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)'}}>BEDDING TYPE DG SETS
</h2>
                  <p>We offer our clients a range of Bedding Type DG Sets that are designed using internationally advanced technology. These DG sets are constructed using quality components and are known for their features of reliable operation, high performance and long functional life. Low in noise and fuel consumption, these are easy to install and require very little maintenance. Further, we provide these in varied power ranges and at most competitive prices.</p>
                </div>



              </div>

            </div>
          </div>
        </div>
      </section>



        </div>
</div>
</div>







  );
}

export default Home;
