import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const NotificationSection = () => {
  
  // redux
  const notification = useSelector(state => state.notificationReducer);
  
  if(notification.message) {

    const classNames = `notification visible} ${notification.type}`;

    return (
      <section className={classNames}>
        {notification.message}
      </section>
    )
  } else {
    return (
      <section />
    )
  }
}

export default NotificationSection;