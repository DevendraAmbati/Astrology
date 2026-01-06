import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Contact.css";
import Navbar from "./navbar";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Import SweetAlert2

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form values
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phoneNumber = form.current.user_number.value;
    const address = form.current.address.value;


    // Check if any of the mandatory fields are empty
    if (!name || !email || !phoneNumber || !address) {
      Swal.fire({
        icon: "error",
        title: "Fill All The Fields",
        text: "Please fill all Details",
      });
      return;
    }

    emailjs
      .sendForm("service_yu4jcfc", "template_og3ehnx", form.current, "v9oZl27xwNZh7JiQK")
      .then((result) => {
        console.log(result.text);

        Swal.fire({
          icon: "success",
          title: "Email Sent Successfully",
          text: "Thank you for contacting us!",
        });

  
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
       
        Swal.fire({
          icon: "error",
          title: "Email Not Sent",
          text: "There was an error sending your email. Please try again later.",
        });
      });
  };

  return (
    <div>
      <div className="contact">
        <section className="py-5">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Card className="p-4 shadow">
                  <h2 className="mb-4">Contact Us</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                      <label htmlFor="user_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="user_email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="text"
                        id="user_email"
                        name="user_email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="user_number" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="user_number"
                        name="user_number"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="address"
                        name="message"
                        rows="4"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" value="send">
                      Send
                    </button>
                  </form>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <h2 className="mb-4 text-white">Our Address</h2>
                <p className="text-white">
                SRI Shiva Shakthi JOYTHISHYA peetam,#10Groud floor  1st main 1st cross  opposite to Albek restaurant  Beside Tanishka Jewelry sampige road Malleswaram banglore
Branch's Jayanagar Banashankari 3rd stge white field
                </p>
                <h2 className="mb-4 text-white">Contact Information</h2>
                <p className="text-white">
                  Email: manjunathwastera5@gmail.com
<br />
                  Phone: 91+9606602700 | 91+9740913366 
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.24510669512!2d77.62499002328104!3d12.913786047499311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15acc2dbffff%3A0xa01973b4dfb824b9!2sCanara+Electrical+Engineers!5e0!3m2!1sen!2sin!4v1565950826965!5m2!1sen!2sin"
          className="w-100"
          height="400"
          title="Google Map"
        ></iframe> */}
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9126427028928!2d77.57081369721966!3d12.994187166616777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1792913907f7%3A0x862ffbbad1bcfdb9!2sShree%20Shiva%20Sakthi%20Jyotishya%20Peetam!5e0!3m2!1sen!2sin!4v1700644590909!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  );
};

export default Contact;