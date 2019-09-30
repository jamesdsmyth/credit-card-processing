import React from 'react';
import PropTypes from 'prop-types';

// error message that is shown when a user inputs an input incorrectly
const Error = ({ text }) => (
  <span
    className={`form-error`}>
    {text}
  </span>
)

Error.propTypes = {
  text: PropTypes.string.isRequired
}

export default Error;