import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 React. All rights reserved.<br></br>For furthermore Enquires Contact:<b>reactofficial@gmail.com</b></p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  textAlign: 'center',
  position:"fixed",
  bottom:"0",
  width:"100%",
  border: '2px solid black',
};

export default Footer;
