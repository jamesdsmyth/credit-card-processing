import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormFields from '../../molecules/formFields/FormFields';
import Button from '../../atoms/button/Button';
import SubHeading from '../../atoms/subHeading/SubHeading';
import Message from '../../atoms/message/Message';

import { postCreditCardAction, clearNotificationsAction } from '../../../actions/actions';
import { properties } from '../../../assets/properties';
import { formValidation } from '../../../helpers/formValidation';
import { encryptCard } from '../../../helpers/encryptCard';

// container for the form, validation and error messages
const AddCardSection = () => {
  
  // redux
  const dispatch = useDispatch();
  const cards = useSelector(state => state.creditCardsReducer);
  const notification = useSelector(state => state.notificationReducer);

  // the local state
  const [formFields, setFormFields] = useState(properties.addCardFormFields);
  const [formData, setFormData] = useState({ name: '', cardNumber: '', limit: '' });
  const [addClickCount, setAddClickCount] = useState(0);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  // when we recieve a notification (success / failure) for writing to the database,
  // we will then enable the submit button to submit another card
  useEffect(() => {
    resetForm();
  }, [cards]);

  const onInputChange = (value, name) => {
    setValue(value, name);
    toggleError(name, true);
    resetMessage();
  }

  // on clicking 'add' we will submit the form after validating it
  const addCreditCardSubmit = (e) => {
    e.preventDefault();
    validateForm();
  }

  const validateForm = () => {
    let isFormValid = true;
  
    // iterate through each field and validate before posting
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
      dispatch(postCreditCardAction(data));
    }
  }

  // we will clear the form when the credit cards have been updated
  // meaning a new user has been added
  const resetForm = () => {
    setSubmitDisabled(false);
    setFormData({ name: '', cardNumber: '', limit: '' });
  }

  // resetting the possible success message of writing to the db
  const resetMessage = () => {
    if(notification.type === 'success') {
        dispatch(clearNotificationsAction());
    }
  }

  // we need to encrypt the card number and set up the object
  const prepareData = () => {
    const lowercaseName = formData.name.toLowerCase().trim();
    const encryptedCard = encryptCard(formData.cardNumber);

    return {
      name: lowercaseName,
      cardNumber: encryptedCard,
      limit: formData.limit,
      balance: 100
    }
  }

  // updating the state with the new value of an input field.
  const setValue = (value, name) => {
    const newData = { [name] : value }
    setFormData({...formData, ...newData});
  }

  // show / hide the error relating to that input field.
  const toggleError = (name, isValid) => {
    const index = formFields.findIndex(item => item.name === name);
    const tempFormFields = formFields;

    if(tempFormFields[index].isValid !== isValid) {
      tempFormFields[index].isValid = isValid;
      setFormFields(tempFormFields);
    }
  }

  return (
    <section className={`page-section`}>
      <SubHeading text={`Add`} />
      <form className={`form ${notification && notification.type}`}>
        <FormFields
          fields={formFields}
          formData={formData}
          onChange={onInputChange}
        />
        <Button 
          type={`submit`}
          text={`Add`}
          isDisabled={submitDisabled}
          onClick={addCreditCardSubmit}
          id={`form-button-submit`}
        />
        {
          notification && 
          notification.type === 'success' &&
          <Message 
            text={notification.message}
            type={notification.type}
          />
        }
      </form>
    </section>
  )
}

export default AddCardSection;