import React, { useState, useEffect } from 'react';

import FormFields from '../../molecules/formFields/FormFields';
import Button from '../../atoms/button/Button';
import SubHeading from '../../atoms/subHeading/SubHeading';

import { properties } from '../../../assets/properties';
import { formValidation } from '../../../helpers/formValidation';

const AddCardSection = () => {

  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    limit: ''
  });

  useEffect(() => {
    setFormFields(properties.addCardFormFields);
  }, []);

  const addCreditCardSubmit = () => {
    Object.keys(formData).forEach(item => {
      const isValid = formValidation(formData[item], item);
      // toggleError(item, isValid);
    });
  }

  const onInputBlur = (value, name) => {
    let isValid = formValidation(value, name);
    
    if(value.length === 0) {
      isValid = true;
    }

    setValue(value, name);
    toggleError(name, isValid);
  }

  const setValue = (value, name) => {
    const newData = { [name] : value }
    let newFormData = {...formData, ...newData}

    setFormData(newFormData);
  }

  const toggleError = (name, isValid) => {
    const index = formFields.findIndex(item => item.name === name);
    const tempFormFields = formFields;

    if(tempFormFields[index].isValid !== isValid) {
      tempFormFields[index].isValid = isValid;
      setFormFields(tempFormFields);
    }
  }

  return (
    <section>
      <SubHeading text={`Add`} />
      <form className="form">
        <FormFields
          fields={formFields}
          onBlur={onInputBlur}
        />
        <Button 
          type={`button`}
          text={`Add`}
          onClick={addCreditCardSubmit}
        />
      </form>
    </section>
  )
}

export default AddCardSection;