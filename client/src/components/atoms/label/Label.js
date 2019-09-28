import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ text, labelFor }) => (
  <label
    htmlFor={labelFor}
    className="form-label">
    {text}
  </label>
)

Label.propTypes = {
  text: PropTypes.string.isRequired
}

export default Label;