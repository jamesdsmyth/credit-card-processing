import React from 'react';
import PropTypes from 'prop-types';

// table heading is at the top of tables
const TableHeading = ({ heading }) => (
  <th className={`table-heading`}>
    {heading}
  </th>
)

TableHeading.propTypes = {
  heading: PropTypes.string.isRequired
}

export default TableHeading;