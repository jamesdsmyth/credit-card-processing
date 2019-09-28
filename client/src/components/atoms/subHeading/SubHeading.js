import React from 'react';
import PropTypes from 'prop-types';

const SubHeading = ({ text }) => (
  <h1 className={`sub-heading`}>
    {text}
  </h1>
)

SubHeading.propTypes = {
  text: PropTypes.string.isRequired
}

export default SubHeading;