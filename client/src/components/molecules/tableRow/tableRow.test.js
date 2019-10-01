import React from 'react';
import { mount, configure } from 'enzyme';

import { properties } from '../../../assets/properties';

import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

import { mockTableData } from '../../../mockData/mock-table-data';

import TableRow from './TableRow';

configure({ adapter: new Adapter() });

describe('<TableRow />', () => {
  const headingsData = properties.existingCardsTableHeadings;
  const cardData = mockTableData[0];

  const container = mount(
    <table>
      <tbody>
        <TableRow
          row={cardData}
          headings={headingsData}
        />
      </tbody>
    </table>
 
  )
  
  it('should render a table row and count should be 1', () => {
    expect(container.find('.table-row').length).toEqual(1);
  });

  it('should have the same count of table cells as the count of table headings', () => {
    expect(container.find('.table-cell').length).toEqual(headingsData.length);
  });
});


