import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SubHeading from '../../atoms/subHeading/SubHeading';
import Table from '../../molecules/table/Table';
import { getCreditCards } from '../../../actions/actions';

import { properties } from '../../../assets/properties';

const ExistingCardSection = () => {
  // redux
  const dispatch = useDispatch();
  const cards = useSelector(state => state.creditCardsReducer);
  const notification = useSelector(state => state.notificationReducer);
  
  // dispatch an action to get the credit cards in mongoDB.
  useEffect(() => {
    dispatch(getCreditCards());
  }, [dispatch]);

  return (
    <section className={`page-section`}>
      <SubHeading text={`Existing Cards`} />
      {
        cards.length === 0
        ? 
          <p>{notification.message}</p>
        :
          <Table
            headings={properties.existingCardsTableHeadings}
            data={cards}
          />
      }
    </section>
  )
}

export default ExistingCardSection;