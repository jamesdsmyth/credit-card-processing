import React from 'react';
import { useSelector } from 'react-redux';

const NotificationSection = () => {
  
  // redux
  const notification = useSelector(state => state.notificationReducer);

  if(notification.message) {

    setTimeout(() => {
      console.log('NOW NEED TO CLEAR THE NOTIFICATION');
    }, 3000);
    
    return (
      <section className={`notification ${notification.type}`}>
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