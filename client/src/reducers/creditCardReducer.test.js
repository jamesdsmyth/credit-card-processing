import expect from 'expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import creditCardsReducer from './creditCardsReducer';
import * as actions from '../actions/actions';

import { mockApiResponseSuccess } from '../mockData/mock-api-success';

configure({ adapter: new Adapter() });

describe('creditCardReducer actions', () => {
  it('should return the initial state', () => {
    expect(creditCardsReducer(undefined, [])).toEqual([]);
  });

  it('should handle GET_CREDIT_CARDS_SUCCESS', () => {
    const getCreditCardsSuccess = {
      type: 'GET_CREDIT_CARDS_SUCCESS',
      data: mockApiResponseSuccess
    }

    expect(creditCardsReducer({}, getCreditCardsSuccess)).toEqual(mockApiResponseSuccess);
  });

  it('should handle GET_CREDIT_CARDS_FAILURE', () => {
    const getCreditCardsFailure = {
      type: 'GET_CREDIT_CARDS_FAILURE'
    }

    expect(creditCardsReducer([], getCreditCardsFailure)).toEqual([]);
  });
});