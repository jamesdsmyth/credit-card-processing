import React from 'react';
import PropTypes from 'prop-types';
import { onInputChangeValidation } from '../../../helpers/formValidation';

const TextInput = ({ type, validation, minLength, maxLength, minValue, id, name, onChange, value }) => {

  // on input change, we will validate the numbers and letters values.
  // An example is we will not allow numbers in the name, but allow spaces.
  // we call onInputChangeValidation passing the input field.
  // we then return the value and the name of the input field to update the state
  const onInputChange = (e) => {
    const updatedValue = onInputChangeValidation(e);
    onChange(updatedValue, e.target.getAttribute('name'));
  }

  return (
    <input
      type={type}
      className={`form-input`}
      data-validation={validation}
      onChange={onInputChange}
      minLength={minLength}
      maxLength={maxLength}
      data-minvalue={minValue}
      id={id}
      name={name}
      value={value}
    />
  )
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  validation: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  minValue: PropTypes.number,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default TextInput;