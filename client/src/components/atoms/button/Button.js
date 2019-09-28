import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, text, onClick, isDisabled, id }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={isDisabled}
    className={`form-button`}
    id={id}
  >
    <span>
      {text}
    </span>
  </button>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  id: PropTypes.string.isRequired
}

export default Button;