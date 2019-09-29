import React from 'react';
import PropTypes from 'prop-types';

import TableHeading from '../../atoms/tableHeading/TableHeading';
import TableRow from '../tableRow/TableRow';

const Table = ({ headings, data }) => (
  <table className={`table`}>
    <thead>
      <tr>
        {
          headings.map((item, index) => {
            return (
              <TableHeading 
                heading={item.heading}
                key={index}
              />
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