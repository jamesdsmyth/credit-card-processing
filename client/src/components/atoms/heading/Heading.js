import React from 'react';
import PropTypes from 'prop-types';

// heading at the top of pages
const Heading = ({ text }) => (
  <h1 className={`heading`}>
    {text}
  </h1>
)

Heading.propTypes = {
  text: PropTypes.string.isRequired
}

export default Heading;