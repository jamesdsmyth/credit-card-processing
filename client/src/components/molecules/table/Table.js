import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '../tableRow/TableRow';

const Table = ({ headings, data }) => (
  <table>
    <thead>
      <tr>
        {
          headings.map((item, index) => {
            return (
              <th key={index}>
                {item.heading}
              </th>
            )
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        data.map((item, index) => {
          return (
            <TableRow
              row={item}
              headings={headings}
              key={index}
            />
          )
        })
      }
    </tbody>
  </table>
)

Table.propTypes = {
  headings: PropTypes.array.isRequired,
  data: PropTypes.array
}

export default Table;