import React from "react";
import Navbar from "./navbar";
import "./About.css";
import IMG2 from "../component/Images/05 (1).jpg";
import banner1 from "./Images/bannhmeeeer.jpg";
import Carousels from "../component/Carousels";
import Technology from "../component/Technology";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import IMG9 from "./Images/ourteam .jpg";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Aboutus = () => {
  return (
    <div>
      <div className="aboutimage">
        <img src={banner1} alt="image" width="100%" height="100%" />

        <header>{/* <!-- Background image --> */}</header>
      </div>

      <div>
        <section>
          <div className="container-fluid">
            <div className="aboutus">
              <h1
                className=" text-center"
                style={{
                  color:
                    "rgba(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)(4, 4, 116, 0.888)",
                }}
              >
                <b>ABOUT US</b>
              </h1>

              <div className=" text-center mt-5 ">
                <h1></h1>
                <h2>
                  <b className="mt-2 mb-3 text-uppercase">
                    WELCOME TO SRI Shiva Shakthi JOYTHISHYA Peetam{" "}
                  </b>
                </h2>
              </div>
              <div className="row p-4">
                <div className="col-lg-6 col-md-6 mt-5">
                  <div className=" ">
                    <img src={IMG2} alt="Images" width="100%"  />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="about-text mt-2"
                    style={{ textAlign: "justify" }}
                  >
                    <p className="mt-5 ">
                      Welcome to SRI Shiva Shakthi JOYTHISHYA Peetam, where
                      ancient wisdom meets modern guidance. Our esteemed
                      astrologers, deeply rooted in the rich traditions of Vedic
                      astrology, are dedicated to illuminating the paths of
                      individuals seeking clarity, purpose, and fulfillment in
                      their lives.
                    </p>
                    <p className="">
                      At SRI Shiva Shakthi JOYTHISHYA Peetam, we believe in the
                      transformative power of astrology to unveil the hidden
                      mysteries of the cosmos and provide profound insights into
                      the intricacies of human existence. With a commitment to
                      authenticity and precision, our experienced astrologers
                      blend traditional wisdom with contemporary understanding
                      to offer personalized and accurate readings.
                    </p>
                    <p>
                      Our mission is to empower individuals on their life
                      journeys, helping them navigate challenges, make informed
                      decisions, and embrace the opportunities that lie ahead.
                      Whether you seek guidance on relationships, career,
                      health, or spiritual growth, our team is dedicated to
                      providing you with the wisdom and clarity needed to make
                      empowered choices.
                    </p>
                    <p>
                      Discover the cosmic tapestry that weaves through your life
                      with SRI Shiva Shakthi JOYTHISHYA Peetam. Let us be your
                      companions on the journey of self-discovery and
                      enlightenment.
                    </p>
                    <a href="Contactus" className="btn btn-warning p-3 fw-bold">
                      CONTACT US
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="p-5">
            <Technology />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
