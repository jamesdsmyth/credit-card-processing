import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { getCreditCardsSuccess, getCreditCardsFailure } from '../actions/actions';

export function* postCreditCard(obj) {
  try {
    const result = yield axios.post('api/credit-cards', obj.data)
    const response = yield result;
    yield put(getCreditCardsSuccess(response));

  } catch(error) {
    yield put(getCreditCardsFailure());
  }
}

export function* getCreditCards() {
  try {
    const result = yield axios.get('api/credit-cards');
    const response = yield result.data;
    yield put(getCreditCardsSuccess(response));

  } catch(error) {
    yield put(getCreditCardsFailure());
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