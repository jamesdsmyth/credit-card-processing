import React from 'react';
import { mount, configure } from 'enzyme';
import { properties } from '../../../assets/properties';

import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

import { mockTableData } from '../../../mockData/mock-table-data';

import Table from './Table';

configure({ adapter: new Adapter() });

describe('Table />', () => {

  const headingsData = properties.existingCardsTableHeadings;
  const cardData = mockTableData;

  const container = mount(
    <Table
      headings={headingsData}
      data={cardData}
    />
    )
  
    it('should have rendered 1 table', () => {
      expect(container.find('table').length).toEqual(1);
    });

    it('should have rendered same count of table headings as objects in headingsData', () => {   
      expect(container.find('.table-heading')).toHaveLength(headingsData.length);
    });

    it('should have rendered same count of table rows as objects in cardData', () => {   
      expect(container.find('.table-row')).toHaveLength(cardData.length);
    });

    it('should have rendered same count of table cells as headings', () => {   
      const row = container.find('.table-row').first();
      expect(row.find('.table-cell')).toHaveLength(headingsData.length);
    });
});


