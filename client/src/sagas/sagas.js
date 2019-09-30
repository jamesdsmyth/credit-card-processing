import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { decryptCard } from '../helpers/encryptCard';

import { 
  postCreditCardSuccessAction, 
  postCreditCardFailureAction, 
  getCreditCardsSuccessAction,
  getCreditCardsEmptySuccessAction, 
  getCreditCardsFailureAction 
} from '../actions/actions';

export function* postCreditCard(obj) {
  try {
    const response = yield call(postCreditCardAPI, obj.data);
    if(response.status === 200) {
      yield put(postCreditCardSuccessAction(response.data));
      yield getCreditCards();
    }
  } catch(error) {
    yield put(postCreditCardFailureAction(obj.data));
  }
}

export function* getCreditCards() {
  try {
    const response = yield call(getCreditCardsAPI);
    if(response.data.length === 0) {
      yield put(getCreditCardsEmptySuccessAction());
    }

    // we need to decrypt the cards before passing to the reducer
    const decryptedCards = response.data.map(item => {
      return Object.assign({}, item, { 'cardNumber': decryptCard(item.cardNumber) })
    });
    yield put(getCreditCardsSuccessAction(decryptedCards));
  } catch(error) {
    console.log('this ieees the error', error)
    yield put(getCreditCardsFailureAction());
  }
}

export const getCreditCardsAPI = async () => {
  try {
    const response = await axios.get('api/v1/credit-cards');
    return response;
  } catch (error) {
    return error;
  }
}

export const postCreditCardAPI = async (data) => {
  try {
    const response = await axios.post('api/v1/credit-cards', data);
    return response;
  } catch (error) {
    return error;
  }
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