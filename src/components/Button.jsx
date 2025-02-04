// Button.jsx
import React from 'react';
import '../Styles/Button.css'; // Import the CSS for button styling

const Button = ({ text, link }) => {
  return (
    <a href={link} className="btn">
      {text}
    </a>
  );
};

export default Button;
