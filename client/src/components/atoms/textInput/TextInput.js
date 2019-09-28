import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ type, onBlur, min, max, id, name }) => {

  // we pass back the input value and the 
  // name to <AddCardSection /> so we can update the state
  const onInputBlur = (e) => {
    onBlur(e.target.value, name);
  }

  return (
    <input
      type={type}
      onBlur={(e) => onInputBlur(e)}
      minLength={min}
      maxLength={max}
      id={id}
      name={name}
    />
  )
}


TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default TextInput;