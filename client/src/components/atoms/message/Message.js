import React from 'react';
import PropTypes from 'prop-types';

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