import { properties } from '../assets/properties';

const notificationReducer = (state = { type: '', message: properties.onLoadMessage}, action) => {
  switch(action.type) {

    case 'POST_CREDIT_CARD_SUCCESS':
      return {
        type: 'success',
        message: `Successfully added a new credit card for ${action.data.name}.`
      };

    case 'GET_CREDIT_CARDS_EMPTY_SUCCESS':
      return {
        type: 'warning',
        message: `We checked, and there are no credit cards saved.`
      };

    case 'POST_CREDIT_CARD_FAILURE':
      return {
        type: 'error',
        message: `Sorry, there seems to be an issue adding a credit card for ${action.data.name}.`
      };

    case 'GET_CREDIT_CARDS_FAILURE':
      return {
        type: 'error',
        message: 'Sorry, there seems to be an issue fetching the credit cards at the moment.'
      };

    case 'CLEAR_NOTIFICATIONS':
      return {
        type: '',
        message: ''
      };

    default:
      return state;
  }
}

export default notificationReducer;