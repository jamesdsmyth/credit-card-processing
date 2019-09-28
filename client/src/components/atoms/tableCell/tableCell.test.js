import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import TableCell from './TableCell';

configure({ adapter: new Adapter() });

describe('<TableCell />', () => {

  const container = shallow(
    <TableCell data={`Thomas`} />
  );

  it('should render a <TableCell />', () => {
    // check that the table cell has recieved the correct props
    expect(container.length).toEqual(1);
  });

  it('should render a <TableCell /> with text', () => {
    const tableCellText = 'Thomas';

    // check that text was rendered when passed as subHeadingText
    expect(container.contains(tableCellText)).toEqual(true);
  });

  it('should render a <TableCell /> with a class', () => {
    const tableCellClass = 'table-cell';

    // check that the button has the correct class
    expect(container.hasClass(tableCellClass)).toEqual(true);
  });
});