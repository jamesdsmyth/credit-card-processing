const notificationReducer = (state = {}, action) => {
  switch(action.type) {

    case 'POST_CREDIT_CARD_SUCCESS':
        return 'Yehhh success sending that card';

    case 'POST_CREDIT_CARD_FAILURE':
        return 'Failure sending that card';

    default:
      return state;
  }
}

export default notificationReducer;