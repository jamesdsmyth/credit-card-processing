import { properties } from '../assets/properties';

// depending on the API response, we will display different types of message.
const notificationReducer = (state = { type: '', message: properties.onLoadMessage}, action) => {
  switch(action.type) {

    case 'POST_CREDIT_CARD_SUCCESS':
      return {
        type: 'success',
        message: `${properties.addCreditCardSuccess} ${action.data.name}.`
      };

    case 'GET_CREDIT_CARDS_EMPTY_SUCCESS':
      return {
        type: 'warning',
        message: `${properties.getCreditCardsEmptySuccess}.`
      };

    case 'POST_CREDIT_CARD_FAILURE':
      return {
        type: 'error',
        message: `${properties.addCreditCardFailure} ${action.data.name}.`
      };

    case 'GET_CREDIT_CARDS_FAILURE':
      return {
        type: 'error',
        message: `${properties.getCreditCardsFailure}.`
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