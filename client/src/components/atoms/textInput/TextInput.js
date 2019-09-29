import React from 'react';
import PropTypes from 'prop-types';
import { onInputChangeValidation } from '../../../helpers/formValidation';


const TextInput = ({ type, validation, minLength, maxLength, minValue, id, name, onBlur }) => {
  // we pass back the input value and the 
  // name to <AddCardSection /> so we can update the state
  const onInputBlur = (e) => {
    onBlur(e.target.value, name);
  }

  // on input change, we will validate the numbers and letters values.
  // An example is we will not allow numbers in the name, but allow spaces.
  // we call onInputChangeValidation passing the input field.
  const onInputChange = (e) => {
    const updatedValue = onInputChangeValidation(e);
    document.getElementById(e.target.id).value = updatedValue;
  }

  return (
    <input
      type={type}
      className={`form-input`}
      data-validation={validation}
      onBlur={(e) => onInputBlur(e)}
      onChange={onInputChange}
      minLength={minLength}
      maxLength={maxLength}
      data-minvalue={minValue}
      id={id}
      name={name}
    />
  )
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  validation: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  minValue: PropTypes.number,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default TextInput;