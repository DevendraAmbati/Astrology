import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {
  const phoneNumber = '+919606602700'; 

  const openWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={buttonContainerStyle} target="_blank">
      <Link  style={buttonStyle} onClick={openWhatsApp}>
        <FaWhatsapp style={iconStyle} />
       
      </Link>
      <div>
        <button style={buttonContainer} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        {/* <FontAwesomeIcon icon={faArrowUp} /> */}
      </div>
    </div>
  );
};

const buttonContainerStyle = {
  position: 'fixed',
  bottom: '100px',
  right: '20px',
  zIndex: '1000',
};
const buttonContainer = {
    position: 'fixed',
    bottom: '40px',
    right: '20px',
    zIndex: '1000',
    display: 'flex',
  alignItems: 'center',
  padding: '15px',
  background: 'rgb(7 129 222)', 
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  };

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  background: '#25D366', 
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const iconStyle = {
  marginRight: '5px',
  
};

export default WhatsAppButton;
