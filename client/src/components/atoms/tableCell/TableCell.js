import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ data, heading }) => {

  let cell = data;
  if(heading === 'balance' || heading === 'limit') {

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2
    });

    cell = formatter.format(data);
  }
  return (
    <td className={`table-cell ${data < 0 ? 'negative-value' : ''}`}>
      {cell}
    </td>
  )
}

TableCell.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  heading: PropTypes.string.isRequired
}

export default TableCell;