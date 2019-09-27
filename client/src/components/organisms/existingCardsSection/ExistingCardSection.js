import React, { useState, useEffect } from 'react';
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
  
  // the local state
  const [tableHeadings, setTableHeadings] = useState([]);

  // dispatch an action to get the credit cards in mongoDB.
  useEffect(() => {
    setTable();
  }, []);

  const setTable = () => {
    setTableHeadings(properties.existingCardsTableHeadings);
    dispatch(getCreditCards());
  }
  
  // const decryptedCards = cards.map(item => Object.assign({}, item, { 'cardNumber': decryptCard(item.cardNumber) }))

  // debugger;
  return (
    <section>
      <SubHeading text={`Existing Cards`} />
      {
        cards.length === 0 
        ? 
          <div>nothing here yet fam</div>
        :
          <Table 
            headings={tableHeadings}
            data={cards}
          />
      }
    </section>
  )
}

export default ExistingCardSection;