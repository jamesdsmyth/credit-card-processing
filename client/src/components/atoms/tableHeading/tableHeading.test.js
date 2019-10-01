import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import TableHeading from './TableHeading';

configure({ adapter: new Adapter() });

describe('<TableHeading />', () => {

  const container = shallow(
    <TableHeading 
      heading={`Balance`}
    />
  );

  it('should render a <TableHeading />', () => {
    
    // check that the table heading has recieved the correct props
    expect(container.length).toEqual(1);
  });

  it('should render a <TableHeading /> with text', () => {
    const tableHeadingText = 'Balance';

    // check that text was rendered when passed as subHeadingText
    expect(container.contains(tableHeadingText)).toEqual(true);
  });

  it('should render a <TableHeading /> with a class', () => {
    const tableHeadingClass = 'table-heading';

    // check that the button has the correct class
    expect(container.hasClass(tableHeadingClass)).toEqual(true);
  });
});