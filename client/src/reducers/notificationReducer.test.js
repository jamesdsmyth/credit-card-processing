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

    const postCreditCardSuccessAction = {
      type: 'POST_CREDIT_CARD_SUCCESS',
      data: mockApiResponseSuccess
    }

    expect(notificationReducer({}, postCreditCardSuccessAction)).toEqual(
      { 
        type: 'success',
        message: `${properties.addCreditCardSuccess} ${postCreditCardSuccessAction.data.name}.`
      }
    );
  });

  it('should handle POST_CREDIT_CARD_FAILURE', () => {

    const postCreditCardFailureAction = {
      type: 'POST_CREDIT_CARD_FAILURE',
      data: mockApiResponseSuccess
    }

    expect(notificationReducer({}, postCreditCardFailureAction)).toEqual(
      { 
        type: 'error',
        message: `${properties.addCreditCardFailure} ${postCreditCardFailureAction.data.name}.`
      }
    );
  });

  it('should handle GET_CREDIT_CARDS_FAILURE', () => {

    const getCreditCardsFailureAction = {
      type: 'GET_CREDIT_CARDS_FAILURE'
    }

    expect(notificationReducer({}, getCreditCardsFailureAction)).toEqual(
      { 
        type: 'error',
        message: `${properties.getCreditCardsFailure}.`
      }
    );
  });

  it('should handle CLEAR_NOTIFICATIONS', () => {

    const clearNotificationsAction = {
      type: 'CLEAR_NOTIFICATIONS'
    }

    expect(notificationReducer({}, clearNotificationsAction)).toEqual(
      { 
        type: '',
        message: ''
      }
    );
  });

  it('should handle GET_CREDIT_CARDS_EMPTY_SUCCESS', () => {

    const getCreditCardsEmptySuccessAction = {
      type: 'GET_CREDIT_CARDS_EMPTY_SUCCESS'
    }

    expect(notificationReducer({}, getCreditCardsEmptySuccessAction)).toEqual(
      { 
        type: 'warning',
        message: `${properties.getCreditCardsEmptySuccess}.`
      }
    );
  });
});