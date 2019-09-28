import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import TextInput from './TextInput';

configure({ adapter: new Adapter() });

describe('<TextInput />', () => {

  const type = 'text';
  const min = 16;
  const max = 19;
  const id = 'form-card-number';
  const name = 'cardNumber';
  let isValid = true;

  const container = shallow(
    <TextInput
      type={type}
      onBlur={() => {}}
      min={min}
      max={max}
      id={id}
      name={name}
      isValid={isValid}
    />
  );

  it('should render a <TextInput />', () => {
    // check that the text input has rendered
    expect(container.length).toEqual(1);
  });

  it('should pass on the relevant props', () => {
    // Check that the props are passed on correctly
    expect(container.prop('type')).toEqual(type);
    expect(container.prop('onBlur')).toEqual(expect.any(Function));
    expect(container.prop('minLength')).toEqual(min);
    expect(container.prop('maxLength')).toEqual(max);
    expect(container.prop('id')).toEqual(id);
    expect(container.prop('name')).toEqual(name);
  });


});
