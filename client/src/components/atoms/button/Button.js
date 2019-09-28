import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, text, onClick, isDisabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={isDisabled}
  >
    {text}
  </button>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
}

export default Button;