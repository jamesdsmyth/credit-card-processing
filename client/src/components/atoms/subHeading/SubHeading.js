import React from 'react';
import PropTypes from 'prop-types';

// sub heading above content blocks on the page
const SubHeading = ({ text }) => (
  <h2 className={`sub-heading`}>
    {text}
  </h2>
)

SubHeading.propTypes = {
  text: PropTypes.string.isRequired
}

export default SubHeading;