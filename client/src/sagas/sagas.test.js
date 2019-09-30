import { takeLatest, put } from 'redux-saga/effects';
import mockAxios from 'axios';


import { mockApiResponseSuccess } from '../mockData/mock-api-success';
import rootSaga, { 
  watchGetCreditCards, 
  watchPostCreditCard, 
  getCreditCards, 
  getCreditCardsAPI,
  postCreditCardAPI
} from './sagas';

import { getCreditCardsAction, postCreditCardAction } from '../actions/actions';

// const mock = new MockAdapter(axios);
jest.mock('axios');

describe('the sagas used to fetch and post to the MongoDB', () => {

  it('should have the correct rootSage takeLatest functions', () => {
    const generator = rootSaga();

    expect(generator.next().value)
      .toEqual(takeLatest('POST_CREDIT_CARD', watchPostCreditCard));

    expect(generator.next().value)
      .toEqual(takeLatest('GET_CREDIT_CARDS', watchGetCreditCards));
    
    expect(generator.next().done).toBeTruthy();
  });

  it('fetches credit cards using axios GET request', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockApiResponseSuccess
      })
    );
    
    const { data } = await getCreditCardsAPI();
    expect(data).toEqual(mockApiResponseSuccess);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('posts a credit card using axios POST request', async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockApiResponseSuccess
      })
    );
    
    const { data } = await postCreditCardAPI();
    expect(data).toEqual(mockApiResponseSuccess);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});