import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Button from './Button.js';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const onClick = jest.fn();

  const container = shallow(
    <Button 
      type={`submit`}
      text={`Add`}
      isDisabled={false}
      onClick={onClick}
      id={`form-button-submit`}
    />
  );

  it('should render a <Button />', () => {
    // check that the button has recieved the correct props
    expect(container.length).toEqual(1);
  });

  it('should render a Button with text', () => {
    const buttonText = 'Add';

    // check that the span has been created when text is passed
    expect(container.find('span').length).toEqual(1);
    
    // check that text was rendered when passed as buttonText
    expect(container.find('span').contains(buttonText)).toEqual(true);
  });

  it('should render a button with a class', () => {
    const buttonClass = 'form-button';

    // check that the button has the correct class
    expect(container.hasClass(buttonClass)).toEqual(true);
  });

  it('should attach an onclick to the button', () => {
    container.simulate('click');

    // check that the click event was fired
    expect(onClick).toHaveBeenCalled();
  });
});
