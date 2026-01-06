import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "./Images/Sri_Shiva_Shakthi_Logo-01-removebg-preview.png";
import "./navbar.css";
import Button from "react-bootstrap/Button";

function CollapsibleExample() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);

  function closeMobileMenu() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (!navbarToggler.classList.contains("collapsed")) {
      navbarToggler.click();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Navbar collapseOnSelect expand="lg" className={`imagenavbar bg-warning ${isNavbarFixed ? "fixed-top" : ""}`}>
      {/* // style={{ backgroundColor: isNavbarFixed && "rgba(4, 114, 92, 0.527)" }} */}
    
      <Container fluid>
        <Navbar.Brand className="">
          <Link to="/">
            <Image src={Img} alt="Logo" width="40%" />
          </Link>
         
        </Navbar.Brand>
        <h5 className="d-none d-md-block navtitale">SRI SHIVA SHAKTHI JOYTHISHYA PEETAM</h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="color justify-content-center flex-grow-1 pe-3">
            <Nav.Link onClick={closeMobileMenu}>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link onClick={closeMobileMenu}>
              <Link to="/Aboutus">About Us</Link>
            </Nav.Link>

            <Nav.Link onClick={closeMobileMenu}>
              <Link to="/Gallery">Gallery</Link>
            </Nav.Link>
            <Nav.Link onClick={closeMobileMenu}>
              <Link to="/Services">Services</Link>
            </Nav.Link>

            <Nav.Link onClick={closeMobileMenu}>
              <Link to="/Contactus">Contact</Link>
            </Nav.Link>
          </Nav>

          <Nav className="justify-content-center">
            <div className="row">
              <Link to="/Contactus">
                <Button
                  className="col-lg-4 button3"
                  variant="primary" // Set the button color to blue
                  style={{ width: "200px" }}
                >
                  <h6 className="text-white">Service Request</h6>
                </Button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
