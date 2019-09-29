import React from 'react';
import PropTypes from 'prop-types';

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