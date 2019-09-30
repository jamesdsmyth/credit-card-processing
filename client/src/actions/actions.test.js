import * as actions from './actions';

import { mockApiResponseSuccess } from '../mockData/mock-api-success';

describe('actions', () => {
  it('should create an action for getCreditCardsAction', () => {
    
    const type = 'GET_CREDIT_CARDS';
    const expectedAction = {
      type
    }
    expect(actions.getCreditCardsAction()).toEqual(expectedAction)
  });

  it('should create an action for getCreditCardsSuccessAction', () => {
    
    const type = 'GET_CREDIT_CARDS_SUCCESS';
    const expectedAction = {
      type,
      data: mockApiResponseSuccess
    }
    expect(actions.getCreditCardsSuccessAction(mockApiResponseSuccess)).toEqual(expectedAction)
  });

  it('should create an action for getCreditCardsFailureAction', () => {
    
    const type = 'GET_CREDIT_CARDS_FAILURE';
    const expectedAction = {
      type
    }
    expect(actions.getCreditCardsFailureAction()).toEqual(expectedAction)
  });

  it('should create an action for postCreditCardAction', () => {
    
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
    expect(actions.postCreditCardAction(data)).toEqual(expectedAction)
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
    expect(actions.postCreditCardSuccessAction(data)).toEqual(expectedAction)
  });

  it('should create an action for postCreditCardFailureAction', () => {
    
    const type = 'POST_CREDIT_CARD_FAILURE';
    const expectedAction = {
      type
    }
    expect(actions.postCreditCardFailureAction()).toEqual(expectedAction)
  });

  it('should create an action for clearNotificationsAction', () => {
    
    const type = 'CLEAR_NOTIFICATIONS';
    const expectedAction = {
      type
    }
    expect(actions.clearNotificationsAction()).toEqual(expectedAction)
  });
})