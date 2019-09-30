// where the credit card data is stored for the table
const creditCardsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_CREDIT_CARDS_SUCCESS':
      return action.data
      
    case 'GET_CREDIT_CARDS_FAILURE':
        return state;

    default:
      return state;
  }
}

export default creditCardsReducer;