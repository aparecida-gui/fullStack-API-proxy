import React from "react";

const Button = ({onClick, children}) => (
  <button className="btn btn-outline-success my-2 my-sm-0" 
    type="submit" onClick={onClick}>{children}
  </button>
);

export default Button;