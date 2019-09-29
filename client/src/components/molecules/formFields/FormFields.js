import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../atoms/textInput/TextInput';
import Label from '../../atoms/label/Label';
import Error from '../../atoms/error/Error';

const FormFields = ({ fields, formData, onChange }) => {
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
            field={item}
            onChange={onChange}
            value={formData[item.name]}
          />
          {
            !item.isValid && 
              <Error text={item.error} />
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