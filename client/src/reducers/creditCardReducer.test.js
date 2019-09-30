import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import creditCardsReducer from './creditCardsReducer';
import * as actions from '../actions/actions';

import { mockApiResponseSuccess } from '../mockData/mock-api-success';

configure({ adapter: new Adapter() });

describe('creditCardReducer reducer', () => {
  it('should return the initial state', () => {
    expect(creditCardsReducer(undefined, [])).toEqual([]);
  });

  it('should handle GET_CREDIT_CARDS_SUCCESS', () => {
    const getCreditCardsSuccessAction = {
      type: 'GET_CREDIT_CARDS_SUCCESS',
      data: mockApiResponseSuccess
    }

    expect(creditCardsReducer({}, getCreditCardsSuccessAction)).toEqual(mockApiResponseSuccess);
  });

  it('should handle GET_CREDIT_CARDS_FAILURE', () => {
    const getCreditCardsFailureAction = {
      type: 'GET_CREDIT_CARDS_FAILURE'
    }

    expect(creditCardsReducer([], getCreditCardsFailureAction)).toEqual([]);
  });
});