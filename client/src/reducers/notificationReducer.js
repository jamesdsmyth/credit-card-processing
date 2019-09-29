import { properties } from '../assets/properties';

const notificationReducer = (state = { type: 'success', message: properties.onLoadMessage}, action) => {
  switch(action.type) {

    case 'POST_CREDIT_CARD_SUCCESS':
        return {
          type: 'success',
          message: `Successfully added a new card for ${action.data.name}.`,
          id: action.data._id
        };

    case 'POST_CREDIT_CARD_FAILURE':
        return {
          type: 'error',
          message: `Sorry, there seems to be an issue adding a card for ${action.data.name}.`
        };

    case 'GET_CREDIT_CARDS_FAILURE':
      return {
        type: 'error',
        message: `Sorry, there seems to be an issue fetching the data at the moment.`
      };

    default:
      return state;
  }
}

export default notificationReducer;