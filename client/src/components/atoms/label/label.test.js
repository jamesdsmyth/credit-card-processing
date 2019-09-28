import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Label from './Label';

configure({ adapter: new Adapter() });

describe('<Label />', () => {

  const container = shallow(
    <Label
      text={`Card number`}
      labelFor={`cardNumber`}
    />
  );

  it('should render a <Label />', () => {
    
    // check that the label has recieved the correct props
    expect(container.length).toEqual(1);
  });

  it('should render a <Label /> with text', () => {
    const labelText = 'Card number';

    // check that text was rendered when passed as labelText
    expect(container.contains(labelText)).toEqual(true);
  });

  it('should render a <Label /> with a class', () => {
    const headingClass = 'form-label';

    // check that the button has the correct class
    expect(container.hasClass(headingClass)).toEqual(true);
  });

  if('should render a <Label /> with the for prop', () => {
    expect(container.props('ffddor')).toEqual('cardNumber');
  });
});
