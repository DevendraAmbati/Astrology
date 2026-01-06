import React, { useEffect } from "react";
import Aos from "aos";
import "../component/Services.css"
import "aos/dist/aos.css";
import Img1 from "../component/Images/Love-Marriage-Solutions.jpg";
import Img2 from "../component/Images/love.jpg";
import Img3 from "../component/Images/Ex-Love-Back-Solutions.jpg";
import Img4 from "../component/Images/Marriage-Problem-Solutions.jpg";
import Img5 from "../component/Images/Relationship-Solutions.jpg";
import Img6 from "../component/Images/Family-Problem-Solutions.jpg";
import Img7 from "../component/Images/Education-Career-Solutions.jpg";
import Img8 from "../component/Images/Business-Problem-Solutions.jpg";
import Img9 from "../component/Images/Health-Problems-Solutions.jpg";
import Img10 from "../component/Images/Divorce-Problems-Solutions.jpg";
import Img11 from "../component/Images/Extra-Martial-Affair.jpg";
import Img12 from "../component/Images/Evil-Spirit-Removal.jpg";
import { Button } from "react-bootstrap";
const Astrologer = [

 {
  id:1,
  image:Img1,
  name:'Love Problem Solutions',
 },
 {
  id:2,
  image:Img2,
  name:'Love Marriage Solutions',
 },
 {
  id:3,
  image:Img3,
  name:'Ex-Love Back Solutions',
 },
 {
  id:4,
  image:Img4,
  name:'Marriage Problem Solutions',
 },
 {
  id:5,
  image:Img5,
  name:'Relationship Solutions',
 },
 {
  id:6,
  image:Img6,
  name:'Family Problem Solutions',
 },
 {
  id:7,
  image:Img7,
  name:'Education & Career Solutions',
 },
 {
  id:8,
  image:Img8,
  name:'Business Problem Solutions',
 },
 {
  id:9,
  image:Img9,
  name:'Health Problems Solutions',
 },
 {
  id:10,
  image:Img10,
  name:'Divorce Problems Solutions',
 },
 {
  id:11,
  image:Img11,
  name:'Extra Martial Affair',
 },
 {
  id:12,
  image:Img12,
  name:'Evil Spirit Removal',
 },
 
];

function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const handleWhatsApp = (id, name) => {
    const phoneNumber = '+919606602700';
    const message = `Hello! I am interested in your service: ${name}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="bg-warning">
      <div className="container">
        <div className="row align-items-center">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>
                  <b
                    className=""
                    style={{
                      color:
                        "rgba(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)",
                    }}
                  >
                    Our Best Astrologer Services 
                  </b>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-12 text-center mt-5 ">
          <div className="row ">
            <div className=" bg-warning">
              <div className="card-body">
                <div className="row">
                <div className="d-flex flex-wrap  mb-3">
                {Astrologer.map((Services) => (
                  <div className="col-lg-4 col-md-4 p-2 " key={Services.id}>
                    <div className="p-2"  onClick={() => handleWhatsApp(Services.id, Services.name)}>
                      <div >
                        <img src={Services.image} alt="" width="100%" className="hovers"   style={{borderRadius:"250px 250px 250px 250px",borderStyle:"double",borderWidth:"15px",}}  onClick={() => handleWhatsApp(Services.id, Services.name)}/>
                      </div>
                      <div className="p-3">
                        <h5 className="text-center">{Services.name}</h5>
                      </div>
                     <Button >Chat with us</Button>
                    </div>
                  </div>
                ))}
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;