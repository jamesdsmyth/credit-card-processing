export const getCreditCards = () => {
  return {
    type: 'GET_CREDIT_CARDS'
  }
}

export const getCreditCardsSuccess = (data) => {
  return {
    type: 'GET_CREDIT_CARDS_SUCCESS',
    data
  }
}

export const getCreditCardsFailure = () => {
  return {
    type: 'GET_CREDIT_CARDS_FAILURE'
  }
}

export const postCreditCard = (data) => {
  return {
    type: 'POST_CREDIT_CARD',
    data
  }
}

export const postCreditCardSuccess = (data) => {
  return {
    type: 'POST_CREDIT_CARD_SUCCESS',
    data
  }
}

export const postCreditCardFailure = (data) => {
  return {
    type: 'POST_CREDIT_CARD_FAILURE',
    data
  }
}

export const clearNotifications = () => {
  return {
    type: 'CLEAR_NOTIFICATIONS'
  }
}