import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../atoms/textInput/TextInput';
import Label from '../../atoms/label/Label';
import Error from '../../atoms/error/Error';

// the form field will contain a label, input and an error message
const FormFields = ({ fields, formData, onChange }) => {
  return (
    fields.map((item, index) => (
        <div
          className={`form-row ${!item.isValid ? 'invalid' : ''}`}
          key={item.id}
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
    )
  )
}

FormFields.propTypes = {
  fields: PropTypes.array.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default FormFields;