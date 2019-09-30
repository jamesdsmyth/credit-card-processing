import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SubHeading from '../../atoms/subHeading/SubHeading';
import Table from '../../molecules/table/Table';
import { getCreditCardsAction } from '../../../actions/actions';
import Message from '../../atoms/message/Message';

import { properties } from '../../../assets/properties';

// this section contains the tablle and feedbacl depending on the api success
const ExistingCardSection = () => {
  // redux
  const dispatch = useDispatch();
  const cards = useSelector(state => state.creditCardsReducer);
  const notification = useSelector(state => state.notificationReducer);
  
  // dispatch an action to get the credit cards in mongoDB.
  useEffect(() => {
    dispatch(getCreditCardsAction());
  }, [dispatch]);
  return (
    <section className={`page-section existing-cards`}>
      <SubHeading text={`Existing Cards`} />
      {
        cards.length === 0
        ? 
        <Message 
          text={notification.message}
          type={notification.type}
        />
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