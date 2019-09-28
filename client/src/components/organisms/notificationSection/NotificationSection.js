import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// container for the form, validation and error messages
const NotificationSection = () => {
  
  // redux
  const notification = useSelector(state => state.notificationReducer);


  console.log(notification);

  return (
    <section>
      breshhhh
    </section>
  )
}

export default NotificationSection;