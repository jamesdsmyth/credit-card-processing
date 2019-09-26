import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, id }) => (
  <input
    type={type}
    id={id}
  />
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default Input;