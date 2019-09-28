import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormFields from '../../molecules/formFields/FormFields';
import Button from '../../atoms/button/Button';
import SubHeading from '../../atoms/subHeading/SubHeading';

import { postCreditCard } from '../../../actions/actions';

import { properties } from '../../../assets/properties';
import { formValidation } from '../../../helpers/formValidation';
import { encryptCard } from '../../../helpers/encryptCard';

// container for the form, validation and error messages
const AddCardSection = () => {
  
  // redux
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notificationReducer);
    
  // the local state
  const [formFields, setFormFields] = useState(properties.addCardFormFields);
  const [formData, setFormData] = useState({ name: '', cardNumber: '', limit: '' });
  const [addClickCount, setAddClickCount] = useState(0);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  // when we recieve a notification (success / failure) for writing to the database,
  // we will then enable the submit button to submit another card
  useEffect(() => {
    handleNotificationFeedback();
  }, [notification]);

  const handleNotificationFeedback = () => {
    setSubmitDisabled(false)
  }

  // on clicking 'add' we will submit the form after validating it
  const addCreditCardSubmit = (e) => {
    e.preventDefault();
    let isFormValid = true;
  
    // iterate through each field and validate before 
    Object.keys(formData).forEach(item => {
      const isFieldValid = formValidation(formData[item], item);
      if (isFieldValid === false) {
        isFormValid = false;
      }
      toggleError(item, isFieldValid);
    });

    // we need to update the state to re-render the error 
    // messages when the user clicks 'add' on page load.
    let i = addClickCount;
    setAddClickCount(i + 1);

    // if the isFormValid is still true after checking all fields,
    // then we can dispatch the action after encrypting the card number
    if(isFormValid) {
      const data = prepareData();
      setSubmitDisabled(true);
      dispatch(postCreditCard(data));
    } 
  }

  // we need to encrypt the card number and set up the object
  const prepareData = () => {
    const encryptedCard = encryptCard(formData.cardNumber);
    return Object.assign({},  formData, { 
        'cardNumber': encryptedCard 
      },
      {
        'balance': 100
      }
    )
  }

  // onBlur we validate the form field, if it is empty,
  // we remove the error. We also call setValue() to
  // update the state
  const onInputBlur = (value, name) => {
    
    // if there is no change in the input and the user just blurs, then
    // no need to do any validation
    if(formData[name] === value) {
      return;
    }

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
          type={`submit`}
          text={`Add`}
          isDisabled={submitDisabled}
          onClick={addCreditCardSubmit}
          id={`form-button-submit`}
        />
      </form>
    </section>
  )
}

export default AddCardSection;