import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ type, onBlur, min, max, id, name }) => {

  // we pass back the input value and the 
  // name to <AddCardSection /> so we can update the state
  const onInputBlur = (e) => {
    onBlur(e.target.value, name);
  }

  const onInputChange = (e) => {
    const reg = new RegExp(/^\d*[1-9]\d*$/);
    console.log(reg.test(e.target.value));
  }

  return (
    <input
      type={type}
      className={`form-input`}
      onBlur={(e) => onInputBlur(e)}
      onChange={onInputChange}
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