import React from 'react';

import Input from '../../atoms/input/Input';
import Label from '../../atoms/label/Label';

const FormField = ({ label, type, min, max, id }) => (
  <div className="form-row">
    <Label
      text={label}
      labelFor={id}
      
    />
    <Input
      type={type}
      id={id}
    />
  </div>
)

export default FormField;