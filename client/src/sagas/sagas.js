import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { decryptCard } from '../helpers/encryptCard';

import { 
  postCreditCardSuccess, 
  postCreditCardFailure, 
  getCreditCardsSuccess, 
  getCreditCardsFailure 
} from '../actions/actions';

export function* postCreditCard(obj) {
  try {
    const response = yield call(postCreditCardAPI, obj.data);
    if(response.status === 200) {
      yield put(postCreditCardSuccess(response.data));
      yield getCreditCards();
    }
  } catch(error) {
    yield put(postCreditCardFailure(obj.data));
  }
}

export function* getCreditCards() {
  try {
    const response = yield call(getCreditCardsAPI);

    // we need to decrypt the cards before passing to the reducer
    const decryptedCards = response.data.map(item => {
      return Object.assign({}, item, { 'cardNumber': decryptCard(item.cardNumber) })
    });

    if(response.status === 200) {
      yield put(getCreditCardsSuccess(decryptedCards));
    }
  } catch(error) {
    yield put(getCreditCardsFailure());
  }
}

export const postCreditCardAPI = (data) => {
  return axios.post('api/credit-cards', data);
}

export const getCreditCardsAPI = () => {
  return axios.get('api/credit-cards');
}

export function* watchPostCreditCard(obj) {
  yield postCreditCard(obj);
}

export function* watchGetCreditCards() {
  yield getCreditCards();
}

// this is the watcher function
export default function* rootSaga() {
  yield takeLatest('POST_CREDIT_CARD', watchPostCreditCard);
  yield takeLatest('GET_CREDIT_CARDS', watchGetCreditCards);
}