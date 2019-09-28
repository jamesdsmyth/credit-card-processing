import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ data, heading }) => (
  <td className={`table-cell`}>
    { heading === 'balance' && '£' }
    { heading === 'limit' && '£' }
    {data}
  </td>
)

TableCell.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  heading: PropTypes.string.isRequired
}

export default TableCell;