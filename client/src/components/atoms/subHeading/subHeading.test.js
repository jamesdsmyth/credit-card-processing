import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import SubHeading from './SubHeading';

configure({ adapter: new Adapter() });

describe('<SubHeading />', () => {

  const container = shallow(
    <SubHeading text={`Existing Cards`} />
  );

  it('should render a <SubHeading />', () => {
    // check that the sub heading has recieved the correct props
    expect(container.length).toEqual(1);
  });

  it('should render a <SubHeading /> with text', () => {
    const subHeadingText = 'Existing Cards';

    // check that text was rendered when passed as subHeadingText
    expect(container.contains(subHeadingText)).toEqual(true);
  });

  it('should render a <SubHeading /> with a class', () => {
    const subHeadingClass = 'sub-heading';

    // check that the button has the correct class
    expect(container.hasClass(subHeadingClass)).toEqual(true);
  });
});
