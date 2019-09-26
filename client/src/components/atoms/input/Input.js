import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, onBlur, min, max, id, name }) => {

  // we pass back the input value and the 
  // name to <AddCardSection /> so we can update the state
  const onInputBlur = (e) => {
    onBlur(e.target.value, name);
  }

  return (
    <input
      type={type}
      className="form-input"
      onBlur={(e) => onInputBlur(e)}
      minLength={min}
      maxLength={max}
      id={id}
      name={name}
      autoComplete="off"
    />
  )
}


Input.propTypes = {
  type: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Input;