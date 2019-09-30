import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TableCell from '../../atoms/tableCell/TableCell';

// table row is a row within a table
// headings are from the properties file and contains a camelCased 'ref'. 
// example cardNumber. This matches with the key values that are in the DB.
// so to display in order, we match it to how it appears in the proeprties file.
const TableRow = ({ row, headings }) => {
  
  // used by me to delete rows during development
  // const deleteRow = () => {
  //   axios.delete(`api/v1/credit-cards/${row._id}`);
  // }
  
  return (
    <tr className={`table-row`}
      // onClick={deleteRow}
    >
    {
      Object.keys(headings).map((item, index) => {
        return (
          <TableCell 
            key={index}
            data={row[headings[item].ref]}
            heading={headings[item].ref}
          />
        )
      })
    }
  </tr>
  )
}
  


TableRow.propTypes = {
  row: PropTypes.object,
  headings: PropTypes.array.isRequired
}

export default TableRow;