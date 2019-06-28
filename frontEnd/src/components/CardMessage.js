import React from "react";
import PropTypes from 'prop-types'

const CardMessage = ({ titleMessage, message }) => (
  <div className="card w-75 card-explanation">
    <div className="card-body">
      <h5 className="card-title text-center">{titleMessage}</h5>
      <p className="card-text text-center">{message}</p>
    </div>
  </div>
);

CardMessage.prototype = {
  titleMessage: PropTypes.string,
  message: PropTypes.object
};

export default CardMessage;
