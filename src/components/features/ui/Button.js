import React from "react";
import PropTypes from "prop-types";

// Define the Button component
const Button = ({ text, onClick, className, style }) => {
  // Combine the provided className with a default className
  const buttonClass = `btn ${className}`;

  return (
    <button
      style={{ ...style }} // Only spread the provided styles without adding default marginBottom
      className={buttonClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Set default props in case they are not provided
Button.defaultProps = {
  className: "btn-primary", // Default class if none is provided
  style: {}, // Default to an empty object if no style is provided
};

// Define propTypes for type-checking
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object, // You could further detail this with shape if needed
};

export default Button;
