import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SubHeading from '../../atoms/subHeading/SubHeading';
import Table from '../../molecules/table/Table';
import { getCreditCards } from '../../../actions/actions';

import { properties } from '../../../assets/properties';
import { decryptCard } from '../../../helpers/encryptCard';

const ExistingCardSection = () => {
  // redux
  const dispatch = useDispatch();
  const cards = useSelector(state => state.creditCardsReducer);
  
  // dispatch an action to get the credit cards in mongoDB.
  useEffect(() => {
    dispatch(getCreditCards());
  }, [dispatch]);
  
  // we need to decrypt the card numbers on rerender as they are saved as encrypted
  const decryptedCards = cards.map(item => {
    return Object.assign({}, item, { 'cardNumber': decryptCard(item.cardNumber) })
  });

  return (
    <section>
      <SubHeading text={`Existing Cards`} />
      {
        decryptedCards.length === 0
        ? 
          <div>nothing here yet fam</div>
        :
          <Table 
            headings={properties.existingCardsTableHeadings}
            data={decryptedCards}
          />
      }
    </section>
  )
}

export default ExistingCardSection;