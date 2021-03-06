// [addCardFormFields] - the form input fields array
// [existingCardsTableHeadings] - the tables headings array

export const properties = {
  landingPageHeading: 'Credit Card System',
  addCardFormFields: [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      validation: 'letters',
      minLength: 1,
      maxLength: 100,
      minValue: 0,
      id: 'form-name',
      error: 'Please enter a valid name.',
      isValid: true
    },
    {
      label: 'Card number',
      type: 'text',
      name: 'cardNumber',
      validation: 'numbers',
      minLength: 16,
      maxLength: 19,
      minValue: 0,
      id: 'form-card-number',
      error: 'Please enter a valid card number.',
      isValid: true
    },
    {
      label: 'Limit',
      type: 'text',
      name: 'limit',
      validation: 'numbers',
      minLength: 1,
      maxLength: 10,
      minValue: 1,
      id: 'form-card-limit',
      error: 'Please enter a valid card limit.',
      isValid: true
    }
  ],
  existingCardsTableHeadings: [
    {
      heading: 'Name',
      ref: 'name',
    },
    {
      heading: 'Card Number',
      ref: 'cardNumber',
    },
    {
      heading: 'Balance',
      ref: 'balance',
    },
    {
      heading: 'Limit',
      ref: 'limit',
    }
  ],
  onLoadMessage: 'Fetching the credit cards...',
  addCreditCardSuccess: 'Successfully added a new credit card for',
  getCreditCardsEmptySuccess: 'We checked, and there are no credit cards saved',
  addCreditCardFailure: 'Sorry, there seems to be an issue adding a credit card for',
  getCreditCardsFailure: 'Sorry, there seems to be an issue fetching the credit cards at the moment'
  
}