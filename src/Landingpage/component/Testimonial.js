// import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import "./Testimonial.css";
// import Img1 from "../component/Images/test1.png";
// import Img2 from "../component/Images/test2.png";
// import Img3 from "../component/Images/test3.png";
// import Img4 from "../component/Images/test1.png";
// import Img5 from "../component/Images/test1.png";
// import Img6 from "../component/Images/test2.png";
// import Img7 from "../component/Images/test3.png";
// import Slider from "react-slick";
// import { Row, Col, Card,icon } from "react-bootstrap";


// export default function App() {
//   const settings = {
//     dots: true,
//     infinite: true,
//    autoplay:true,
//     autoplaySpeed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div className="py-5" >
//       <Row className="d-flex justify-content-center">
//         <Col md="10" xl="8" className="text-center">
//           <h2 className="mb-4 text-black text-bold">Testimonials</h2>
//           <p className="mb-4 pb-2 mb-md-5 pb-md-0 text-white">
           
//           </p>
//         </Col>
//       </Row>
//       <Row className="text-center d-flex align-items-stretch">
//       <Slider {...settings}>
//         <div md="4" className="mb-5 mb-md-0 d-flex align-items-stretch p-2 col-lg-4">
//           <Card className="testimonial-card" style={{background: "content-box radial-gradient(#faf7f7, skyblue)",height:"500px", }} >
            
//             <div
//               className="card-up mt-3"
              
//             ></div>
//             <div className="avatar mx-auto  d-flex justify-content-center " >
//               <img
//                 src={Img2}
//                 className="  " width="50%" 
//               />
//             </div>
//             <div className="p-3">
//               <h4 className="mb-4">John Abraham</h4>
//               <hr />
//               <p className="dark-grey-text mt-4 " style={{textAlign:"justify"}}>
//                 <icon fas icon="quote-left" className="pe-2" />
               
// I recently purchased a inverter generator. Great product knowledge. Fastest FREE delivery, next working day Friendly service, No pressure. Good price and accessories available.

//               </p>
//             </div>
//           </Card>
//         </div>
//         <div md="4" className="mb-5 mb-md-0 d-flex align-items-stretch p-2 col-lg-4">
//           <Card className="testimonial-card" style={{background: "content-box radial-gradient(#faf7f7, skyblue)",height:"500px"}}>
//             <div
//               className="card-up mt-3"
              
//             ></div>
//             <div className="avatar mx-auto  d-flex justify-content-center ">
//               <img
//                 src={Img3}
//                 className="img-fluid  " width="50%" style={{borderRadius:"50%"}}
//               />
//             </div>
//             <div className="p-3">
//               <h4 className="mb-4">GopiNath Subramani</h4>
//               <hr />
//               <p className="dark-grey-text mt-4" style={{textAlign:"justify"}}>
//                 <icon fas icon="quote-left" className="pe-2" />
              
// Hi guys, just like to thank you for your fast delivery and service, geny looks and runs good. I will recommend it to all my fellow prospectors. I give you a 5 star plus for your good fast service. A pleasure to do business with you and will tell my friends to buy from you also. Thanks again!

//               </p>
//             </div>
//           </Card>
//         </div>
//         <Col md="4" className="mb-5 mb-md-0 d-flex align-items-stretch p-2">
//           <Card className="testimonial-card" style={{background: "content-box radial-gradient(#faf7f7, skyblue)",height:"500px"}}>
//             <div
//               className="card-up mt-3"
              
//             ></div>
//             <div className="avatar mx-auto  d-flex justify-content-center">
//               <img
//                 src={Img4}
//                 className=" img-fluid" width="50%"
//               />
//             </div>
//             <div className="p-3">
//               <h4 className="mb-4">Naveen Dodra</h4>
//               <hr />
//               <p className="dark-grey-text mt-4" style={{textAlign:"justify"}}>
//                 <icon fas icon="quote-left" className="pe-2" />
                
// I purchased a 200Kva and 120Kva Inverter Generator from Canara Electrical Engineers. I must say that the pre sales advice & expertise that I received from Sean was great. A big thank you to everyone, needless to say the 200Kva unit is performing flawlessly.
//               </p>
//             </div>
//           </Card>
//         </Col>
        
//         <Col md="4" className="mb-5 mb-md-0 d-flex align-items-stretch p-2">
//           <Card className="testimonial-card" style={{background: "content-box radial-gradient(#faf7f7, skyblue)",height:"500px"}}>
//             <div
//               className="card-up mt-3"
              
//             ></div>
//             <div className="avatar mx-auto  d-flex justify-content-center ">
//               <img
//                 src={Img7}
//                 className=" img-fluid " width="50%" style={{borderRadius:"50%"}}
//               />
//             </div>
//             <div className="p-3">
//               <h4 className="mb-4">Anish C</h4>
//               <hr />
//               <p className="dark-grey-text mt-4 " style={{textAlign:"justify"}}>
//                 <icon fas icon="quote-left" className="pe-2" />
             
// Hi there, just wanted to say thanks for getting us the generator we ordered in time for our camping getaway. Delivery time was fast as hoped. Can’t wait to hit the open road with our caravan in tow. Thanks Canara Electrical Engineers
//               </p>
//             </div>
//           </Card>
//         </Col>
//         <Col md="4" className="mb-5 mb-md-0 d-flex align-items-stretch p-2">
//           <Card className="testimonial-card" style={{background: "content-box radial-gradient(#faf7f7, skyblue)",height:"500px"}}>
//             <div
//               className="card-up mt-3"
              
//             ></div>
//             <div className="avatar mx-auto  d-flex justify-content-center ">
//               <img
//                 src={Img6}
//                 className=" img-fluid" width="50%" 
//               />
//             </div>
//             <div className="p-3">
//               <h4 className="mb-4">Deleep</h4>
//               <hr />
//               <p className="dark-grey-text mt-4 " style={{textAlign:"justify"}}>
//                 <icon fas icon="quote-left" className="pe-2" />
              
// The staff and service was great. I rang and got some good advice. The ordering was simple and the generator arrived very quickly. Overall 5 stars. The price was great and included free delivery. A real pleasure doing business with you
//               </p>
//             </div>
//           </Card>
//         </Col>
//         <Col md="4" className="mb-5 mb-md-0 d-flex align-items-stretch p-2">
//           <Card className="testimonial-card" style={{background: "content-box radial-gradient(#faf7f7, skyblue)",height:"500px"}}>
//             <div
//               className="card-up mt-3"
              
//             ></div>
//             <div className="avatar mx-auto d-flex justify-content-center" >
//               <img
//                 src={Img1}
//                  width="50%"  className="img-fluid"
//               />
//             </div>
//             <div className="p-3">
//               <h4 className="mb-4">S.C GovindRaju</h4>
//               <hr />
//               <p className="dark-grey-text mt-4" style={{textAlign:"justify"}}>
//                 <icon fas icon="quote-left" className="pe-2" />
                
// Thank you for your online advice and suggestions throughout the buying process. The unit powers my van for the markets just fine. I was glad to have someone take me through the steps as it wasn’t something I knew a lot about initially. Thanks again
//               </p>
//             </div>
//           </Card>
//         </Col>
//         </Slider>
//       </Row>
//     </div>
//   );
// }


import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import Img1 from "../component/Images/test1.png";
import Img2 from "../component/Images/test2.png";
import Img3 from "../component/Images/test3.png";
import Img4 from "../component/Images/test1.png";
import Img5 from "../component/Images/test1.png";
import Img6 from "../component/Images/test2.png";
import Img7 from "../component/Images/test3.png";

const testimonialsData = [
  {
    id: 1,
    image: Img2,
    name: 'John Abraham',
    text: 'I recently purchased an inverter generator. Great product knowledge. Fastest FREE delivery, next working day Friendly service, No pressure. Good price and accessories available.',
  },
  {
    id: 2,
    image: Img3,
    name: 'GopiNath Subramani',
    text: 'Hi guys, just like to thank you for your fast delivery and service, geny looks and runs good. I will recommend it to all my fellow prospectors. I give you a 5 star plus for your good fast service. A pleasure to do business with you and will tell my friends to buy from you also. Thanks again!',
  },
  {
    id: 3,
    image: Img4,
    name: 'Naveen Dodra',
    text: 'I purchased a 200Kva and 120Kva Inverter Generator from Canara Electrical Engineers. I must say that the pre sales advice & expertise that I received from Sean was great. A big thank you to everyone, needless to say the 200Kva unit is performing flawlessly.',
  },
  {
    id: 4,
    image: Img7,
    name: 'Anish C',
    text: 'Hi there, just wanted to say thanks for getting us the generator we ordered in time for our camping getaway. Delivery time was fast as hoped. Can’t wait to hit the open road with our caravan in tow. Thanks Canara Electrical Engineers',
  },
  {
    id: 5,
    image: Img6,
    name: 'Deleep',
    text: 'The staff and service was great. I rang and got some good advice. The ordering was simple and the generator arrived very quickly. Overall 5 stars. The price was great and included free delivery. A real pleasure doing business with you',
  },
  {
    id: 6,
    image: Img1,
    name: 'S.C GovindRaju',
    text: 'Thank you for your online advice and suggestions throughout the buying process. The unit powers my van for the markets just fine. I was glad to have someone take me through the steps as it wasn’t something I knew a lot about initially. Thanks again',
  },
];

const Testimonials = () => {
  const settings = {
   
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className='row'>
        <div className='col-lg-4 col-md-4'>
          <div className='card p-2'>asa;sck</div>
          
        </div>
        <div className='col-lg-4 col-md-4'>
          <div className='card p-2'>asa;sck</div>
          
        </div>
        <div className='col-lg-4 col-md-4'>
          <div className='card p-2'>asa;sck</div>
          
        </div>
      </div>
    </div>

  );
};

export default Testimonials;

