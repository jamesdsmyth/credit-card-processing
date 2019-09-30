import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import notificationReducer from './notificationReducer';
import * as actions from '../actions/actions';

import { properties } from '../assets/properties';

import { mockApiResponseSuccess } from '../mockData/mock-api-success';

configure({ adapter: new Adapter() });

describe('notification reducer', () => {

const initialState = { 
  type: '', 
  message: properties.onLoadMessage
}
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, initialState)).toEqual(initialState);
  });

  it('should handle POST_CREDIT_CARD_SUCCESS', () => {

    const postCreditCardSuccess = {
      type: 'POST_CREDIT_CARD_SUCCESS',
      data: mockApiResponseSuccess
    }

    expect(notificationReducer({}, postCreditCardSuccess)).toEqual(
      { 
        type: 'success',
        message: `Successfully added a new credit card for ${postCreditCardSuccess.data.name}.`
      }
    );
  });

  it('should handle POST_CREDIT_CARD_FAILURE', () => {

    const postCreditCardFailure = {
      type: 'POST_CREDIT_CARD_FAILURE',
      data: mockApiResponseSuccess
    }

    expect(notificationReducer({}, postCreditCardFailure)).toEqual(
      { 
        type: 'error',
        message: `Sorry, there seems to be an issue adding a credit card for ${postCreditCardFailure.data.name}.`
      }
    );
  });

  it('should handle GET_CREDIT_CARDS_FAILURE', () => {

    const getCreditCardsFailure = {
      type: 'GET_CREDIT_CARDS_FAILURE'
    }

    expect(notificationReducer({}, getCreditCardsFailure)).toEqual(
      { 
        type: 'error',
        message: 'Sorry, there seems to be an issue fetching the credit cards at the moment.'
      }
    );
  });

  it('should handle CLEAR_NOTIFICATIONS', () => {

    const clearNotifications = {
      type: 'CLEAR_NOTIFICATIONS'
    }

    expect(notificationReducer({}, clearNotifications)).toEqual(
      { 
        type: '',
        message: ''
      }
    );
  });
});