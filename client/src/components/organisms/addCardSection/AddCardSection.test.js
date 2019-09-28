import React from 'react';
import { mount } from 'enzyme';

import expect from 'expect';
import AddCardSection from './AddCardSection';

it('calls onSubmit prop function when form is submitted', () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<AddCardSection onSubmit={onSubmitFn}/>);
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});