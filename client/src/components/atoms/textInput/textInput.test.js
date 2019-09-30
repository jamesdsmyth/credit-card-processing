import React from 'react';
import { shallow, configure } from 'enzyme';

import { properties } from '../../../assets/properties';

import Adapter from 'enzyme-adapter-react-16';

import TextInput from './TextInput';

configure({ adapter: new Adapter() });

describe('<TextInput />', () => {

  const field = properties.addCardFormFields[0];
  const onChange = jest.fn();
  const value = 'James';

  const container = shallow(
    <TextInput
      field={field}
      onChange={onChange}
      value={value}
    />
  );

  it('should render a <TextInput />', () => {
    // check that the text input has rendered
    expect(container.length).toEqual(1);
  });

  it('should pass on the relevant props', () => {
    // Check that the props are passed on correctly
    expect(container.prop('type')).toEqual(field.type);
    expect(container.prop('data-validation')).toEqual(field.validation);
    expect(container.prop('minLength')).toEqual(field.minLength);
    expect(container.prop('maxLength')).toEqual(field.maxLength);
    expect(container.prop('data-minvalue')).toEqual(field.minValue);
    expect(container.prop('name')).toEqual(field.name);
    expect(container.prop('id')).toEqual(field.id);
    expect(container.prop('name')).toEqual(field.name);
    // expect(container.prop('onChange')).toEqual(onChange);
    expect(container.prop('value')).toEqual(value);
  });

  it('should call an onChange() event when typed in', () => {
    const bbb = 'name';
    const attrs = { dataset: 'name', value: 'james', validation: 'letters' };
    const data = { target: { getAttribute: name => attrs[name], ...attrs }};

    container.simulate('change', data);
    
    // checking to make sure the onChange event was fired
    expect(onChange).toBeCalled()
  });
});
