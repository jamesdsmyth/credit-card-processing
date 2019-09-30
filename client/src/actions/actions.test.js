import * as actions from './actions';

import { mockApiResponseSuccess } from '../mockData/mock-api-success';

describe('actions', () => {
  it('should create an action for getCreditCards', () => {
    
    const type = 'GET_CREDIT_CARDS';
    const expectedAction = {
      type
    }
    expect(actions.getCreditCards()).toEqual(expectedAction)
  });

  it('should create an action for getCreditCardsSuccess', () => {
    
    const type = 'GET_CREDIT_CARDS_SUCCESS';
    const expectedAction = {
      type,
      data: mockApiResponseSuccess
    }
    expect(actions.getCreditCardsSuccess(mockApiResponseSuccess)).toEqual(expectedAction)
  });

  it('should create an action for getCreditCardsFailure', () => {
    
    const type = 'GET_CREDIT_CARDS_FAILURE';
    const expectedAction = {
      type
    }
    expect(actions.getCreditCardsFailure()).toEqual(expectedAction)
  });

  it('should create an action for postCreditCard', () => {
    
    const type = 'POST_CREDIT_CARD';  
    const data = {
      balance: 100,
      cardNumber: "4852e91c32b7ee6b9dab09f8ebce0a95:40f2f23d43174952446695269596a709",
      limit: "300",
      name: "thomas"
    }

    const expectedAction = {
      type,
      data
    }
    expect(actions.postCreditCard(data)).toEqual(expectedAction)
  });

  it('should create an action for postCreditCard', () => {
    
    const type = 'POST_CREDIT_CARD_SUCCESS';  
    const data = {
      balance: 100,
      cardNumber: "4852e91c32b7ee6b9dab09f8ebce0a95:40f2f23d43174952446695269596a709",
      limit: 300,
      name: "thomas",
      __v: 0,
      _id: "5d8fa6e4917f2320c27003d6"
    }

    const expectedAction = {
      type,
      data
    }
    expect(actions.postCreditCardSuccess(data)).toEqual(expectedAction)
  });

  it('should create an action for postCreditCardFailure', () => {
    
    const type = 'POST_CREDIT_CARD_FAILURE';
    const expectedAction = {
      type
    }
    expect(actions.postCreditCardFailure()).toEqual(expectedAction)
  });

  it('should create an action for clearNotifications', () => {
    
    const type = 'CLEAR_NOTIFICATIONS';
    const expectedAction = {
      type
    }
    expect(actions.clearNotifications()).toEqual(expectedAction)
  });
})