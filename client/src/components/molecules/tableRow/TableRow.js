import React from 'react';
import PropTypes from 'prop-types';

// headings are from the properties file and contains a camelCased 'ref'. 
// example cardNumber. This matches with the key values that are in the DB.
// so to display in order, we match it to how it appears in the proeprties file.
const TableRow = ({ row, headings }) => (
  <tr>
    {
      Object.keys(headings).map((item, index) => {
        return (
          <td key={index}>
            {row[headings[item].ref]}
          </td>
        )
      })
    }
  </tr>
)

TableRow.propTypes = {
  row: PropTypes.object,
  headings: PropTypes.array.isRequired
}

export default TableRow;