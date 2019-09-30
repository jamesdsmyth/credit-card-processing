import React from 'react';
import PropTypes from 'prop-types';
import { onInputChangeValidation } from '../../../helpers/formValidation';

const TextInput = ({ field, onChange, value }) => {

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
      type={field.type}
      className={`form-input`}
      data-validation={field.validation}
      minLength={field.minLength}
      maxLength={field.maxLength}
      data-minvalue={field.minValue}
      id={field.id}
      name={field.name}
      onChange={onInputChange}
      value={value}
    />
  )
}

TextInput.propTypes = {
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default TextInput;