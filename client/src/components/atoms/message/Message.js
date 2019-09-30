import React from 'react';
import PropTypes from 'prop-types';

// message is a notification related to the API feedback
const Message = ({ text, type }) => (
  <span className={`message ${type}`}>
    {text}
  </span>
)

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Message;