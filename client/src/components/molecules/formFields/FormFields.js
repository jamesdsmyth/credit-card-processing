import React from 'react';

import Input from '../../atoms/input/Input';
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
          <Input
            type={item.type}
            onBlur={onBlur}
            min={item.min}
            max={item.max}
            id={item.id}
            name={item.name}
            isValid={item.isValid}
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
  


export default FormFields;