import React from "react";
import PropTypes from 'prop-types';

const Button = ({onClick, children}) => (
  <button className="btn btn-outline-success my-2 my-sm-0" 
    type="submit" onClick={onClick}>{children}
  </button>
);

Button.prototype = {
  onClick: PropTypes.func,
  children: PropTypes.string
};

export default Button;