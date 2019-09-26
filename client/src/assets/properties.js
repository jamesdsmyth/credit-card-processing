export const properties = {
  landingPageHeading: 'Credit Card System',
  addCardFormFields: [
    {
      label: 'Name',
      type: 'text',
      min: 0,
      max: 100,
      id: 'form-name'
    },
    {
      label: 'Card number',
      type: 'text',
      min: 16,
      max: 19,
      id: 'form-card-number'
    },
    {
      label: 'Limit',
      type: 'text',
      min: 0,
      max: 100,
      id: 'form-card-limit'
    }
  ]
}