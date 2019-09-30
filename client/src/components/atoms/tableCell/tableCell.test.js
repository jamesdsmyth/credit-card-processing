import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import TableCell from './TableCell';

configure({ adapter: new Adapter() });

describe('<TableCell />', () => {

  it('should render a <TableCell />', () => {
    const container = shallow(
      <TableCell 
        data={'Thomas'}
        heading={`name`}
      />
    );
    
    // check that the table cell has recieved the correct props
    expect(container.length).toEqual(1);
  });

  it('should render a <TableCell /> with the correct string', () => {
    const tableCellText = `Thomas`;
    const container = shallow(
      <TableCell 
        data={`Thomas`}
        heading={`name`}
      />
    )

    // check that cell was rendered when passed as tableCellText
    expect(container.contains(tableCellText)).toEqual(true);
  });

  it('should render a <TableCell /> with the correct integer', () => {
    const tableCellNumber = 100;
    const container = shallow(
      <TableCell 
        data={tableCellNumber}
        heading={`balance`}
      />
    )

    // check that cell was rendered when passed as tableCellText
    expect(container.contains('£100.00')).toEqual(true);
  });

  it('should render a <TableCell /> with the correct integer', () => {
    const tableCellNumber = 13831095;
    const container = shallow(
      <TableCell 
        data={tableCellNumber}
        heading={`limit`}
      />
    )

    // check that cell was rendered when passed as tableCellText
    expect(container.contains('£13,831,095.00')).toEqual(true);
  });

  it('should render a <TableCell /> with correct class', () => {
    const tableCellClass = 'table-cell';

    const tableCellNumber = 13831095;
    const container = shallow(
      <TableCell 
        data={tableCellNumber}
        heading={`limit`}
      />
    )

    // check that the button has the correct class
    expect(container.hasClass(tableCellClass)).toEqual(true);
  });

  it('should render a <TableCell /> with correct negative class', () => {
    const tableCellClass = 'table-cell negative-value';

    const tableCellNumber = -100;
    const container = shallow(
      <TableCell 
        data={tableCellNumber}
        heading={`limit`}
      />
    )

    // check that the button has the correct class
    expect(container.hasClass(tableCellClass)).toEqual(true);
  });
});