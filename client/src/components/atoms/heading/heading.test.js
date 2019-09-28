import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Heading from './Heading.js';

configure({ adapter: new Adapter() });

describe('<Heading />', () => {

  const container = shallow(
    <Heading text={`Credit Card System`} />
  );

  it('should render a <Heading />', () => {
    // check that the heading has recieved the correct props
    expect(container.length).toEqual(1);
  });

  it('should render a Heading with text', () => {
    const headingText = 'Credit Card System';

    // check that text was rendered when passed as headingText
    expect(container.contains(headingText)).toEqual(true);
  });

  it('should render a heading with a class', () => {
    const headingClass = 'heading';

    // check that the button has the correct class
    expect(container.hasClass(headingClass)).toEqual(true);
  });
});
