import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Message from './Message';

configure({ adapter: new Adapter() });

describe('<Message />', () => {

  const user = 'Thomas';
  const message = `Successfully added a new credit card for ${user}.`
  const container = shallow(
    <Message
      text={message}
      type={`success`}
    />
  );

  it('should render a <Message />', () => {
    
    // check that the message has been rendered
    expect(container.length).toEqual(1);
  });

  it('should render a <Message /> with text', () => {

    // check that text was rendered when passed
    expect(container.contains(message)).toEqual(true);
  });

  it('should render a <Message /> with a class', () => {
    const messageClass = 'message';

    // check that the message has the correct class
    expect(container.hasClass(messageClass)).toEqual(true);
  });
});
