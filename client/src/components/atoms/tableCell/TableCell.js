import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ data }) => (
  <td className="table-cell">
    {data}
  </td>
)

TableCell.propTypes = {
  data: PropTypes.string
}

export default TableCell;