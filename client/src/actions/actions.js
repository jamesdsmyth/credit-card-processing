export const getCreditCardsAction = () => {
  return {
    type: 'GET_CREDIT_CARDS'
  }
}

export const getCreditCardsSuccessAction = (data) => {
  return {
    type: 'GET_CREDIT_CARDS_SUCCESS',
    data
  }
}

export const getCreditCardsEmptySuccessAction = () => {
  return {
    type: 'GET_CREDIT_CARDS_EMPTY_SUCCESS'
  }
}

export const getCreditCardsFailureAction = () => {
  return {
    type: 'GET_CREDIT_CARDS_FAILURE'
  }
}

export const postCreditCardAction = (data) => {
  return {
    type: 'POST_CREDIT_CARD',
    data
  }
}

export const postCreditCardSuccessAction = (data) => {
  return {
    type: 'POST_CREDIT_CARD_SUCCESS',
    data
  }
}

export const postCreditCardFailureAction = (data) => {
  return {
    type: 'POST_CREDIT_CARD_FAILURE',
    data
  }
}

export const clearNotificationsAction = () => {
  return {
    type: 'CLEAR_NOTIFICATIONS'
  }
}