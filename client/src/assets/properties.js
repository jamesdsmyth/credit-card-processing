export const properties = {
  landingPageHeading: 'Credit Card System',
  addCardFormFields: [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      min: 0,
      max: 100,
      id: 'form-name',
      error: 'Please enter a valid name using letters',
      isValid: true
    },
    {
      label: 'Card number',
      type: 'text',
      name: 'cardNumber',
      min: 16,
      max: 19,
      id: 'form-card-number',
      error: 'Please enter a valid card number using numbers',
      isValid: true
    },
    {
      label: 'Limit',
      type: 'text',
      name: 'limit',
      min: 0,
      max: 100,
      id: 'form-card-limit',
      error: 'Please enter a valid card limit using numbers',
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
  ]
}