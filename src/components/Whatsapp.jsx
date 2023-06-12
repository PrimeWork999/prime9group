import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
    const phoneNumbers = ['+918871966513','+919179272427','+919893298959'];
    const sendWhatsAppMessage = (phoneNumber) => {
      const message = 'I want a new ID!'; // replace with your message
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
    const updatePhoneNumber = () => {
      const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
      const phoneNumber = phoneNumbers[randomIndex];
      sendWhatsAppMessage(phoneNumber);
    };
  return (
    <div
      className="whatsapp-icon"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: '999',
      }}
      onClick={updatePhoneNumber}
    >
      <FaWhatsapp size={32} color="#FFFFFF" />
    </div>
  );
};

export default WhatsAppIcon;
