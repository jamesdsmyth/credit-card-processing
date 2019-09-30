import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Error from './Error';

configure({ adapter: new Adapter() });

describe('<Error />', () => {

  const message = `Please enter a valid card number.`
  const container = shallow(
    <Error
      text={message}
    />
  );

  it('should render a <Error />', () => {
    
    // check that the error has been rendered
    expect(container.length).toEqual(1);
  });

  it('should render a <Error /> with text', () => {

    // check that the error was rendered when passed
    expect(container.contains(message)).toEqual(true);
  });

  it('should render a <Message /> with a class', () => {
    const messageClass = 'form-error';

    // check that the error has the correct message
    expect(container.hasClass(messageClass)).toEqual(true);
  });
});
