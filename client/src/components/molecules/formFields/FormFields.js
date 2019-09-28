import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../atoms/textInput/TextInput';
import Label from '../../atoms/label/Label';

const FormFields = ({ fields, onBlur }) => {
  return (
    fields.map((item, index) => {
      return (
        <div 
          className={`form-row ${!item.isValid ? 'invalid' : ''}`}
          key={index}
        >
          <Label
            text={item.label}
            labelFor={item.id}
          />
          <TextInput
            type={item.type}
            onBlur={onBlur}
            min={item.min}
            max={item.max}
            id={item.id}
            name={item.name}
          />
          { !item.isValid &&
            <span>
              {item.error}
            </span>
          }
        </div>
      )
    })
  )
}

FormFields.propTypes = {
  fields: PropTypes.array.isRequired,
  onBlur: PropTypes.func
}
  


export default FormFields;