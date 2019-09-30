import React from 'react';
import PropTypes from 'prop-types';

// label for inputs
const Label = ({ text, labelFor }) => (
  <label
    htmlFor={labelFor}
    className={`form-label`}>
    {text}
  </label>
)

Label.propTypes = {
  text: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired
}

export default Label;