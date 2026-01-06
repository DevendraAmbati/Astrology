import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import Img1 from "../component/Images/test1.png";
import Img2 from "../component/Images/test2.png";
import Img3 from "../component/Images/test3.png";
import Img4 from "../component/Images/test1.png";
import Img5 from "../component/Images/test1.png";
import Img6 from "../component/Images/test2.png";
import Img7 from "../component/Images/test3.png";
const ReviewsData = [
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
    {
        id: 7,
        image: Img5,
        name: 'S.C GovindRaju',
        text: 'Thank you for your online advice and suggestions throughout the buying process. The unit powers my van for the markets just fine. I was glad to have someone take me through the steps as it wasn’t something I knew a lot about initially. Thanks again',
      },
  ];

const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 5000,
        autoplaySpeed: 2000,  
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="">
      <Row className="justify-content-center">
        <div className="text-center">
          <h2 className="mb-4 text-black text-bold">Testimonials</h2>
         
        </div>
      </Row>
      <Slider {...settings}>
        {ReviewsData.map((Review) => (
          <div key={Review.id} className=" row p-2">
            <div  lg={4} md={3} className="d-flex  p-2 ">
              <div style={{ background: " radial-gradient(#faf7f7, skyblue)", height: "500px" }} className='rounded'>
                <div className="card-up mt-3"></div>
                <div className="avatar  d-flex justify-content-center">
                  <img src={Review.image} className="img-fluid " width="50%" alt={Review.name} />
                </div>
                <div className="p-3">
                  <h4 className='text-center'>{Review.name}</h4>
                  <hr />
                  <p style={{ textAlign: "justify" }}>
                    <i></i>
                    {Review.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
