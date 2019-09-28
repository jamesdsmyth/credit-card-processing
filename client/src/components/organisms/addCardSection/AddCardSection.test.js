import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

import AddCardSection from './AddCardSection';

configure({ adapter: new Adapter() });

describe('AddCardSection />', () => {
  const mockStore = configureStore();
  const store = mockStore({});
  const submitFunction = jest.fn();

  const container = mount(
    <Provider store={store}>
      <AddCardSection/>
      </Provider>
    )
  
    // it('should have a name input field', () => {
    //   expect(container.find('input[name="name"]').length).toEqual(1);
    // });

    // it('should have the correct props for a name input field', () => {
    //   expect(container.find('input[name="name"]').props()).toEqual({
    //     onBlur: () => {},
    //     id: 'form-name',
    //     maxLength: 100,
    //     minLength: 0,
    //     name: 'name',
    //     type: 'text'
    //   });
    // });

    // it('should have a name card number input field', () => {
    //   expect(container.find('input[name="cardNumber"]').length).toEqual(1);
    // });

    // it('should have the correct props for a card number input field', () => {
    //   expect(container.find('input[name="cardNumber"]').props()).toEqual({
    //     onBlur: () => {},
    //     id: 'form-card-number',
    //     maxLength: 19,
    //     minLength: 16,
    //     name: 'cardNumber',
    //     type: 'text'
    //   });
    // });

    // it('should have a card limit input field', () => {
    //   expect(container.find('input[name="limit"]').length).toEqual(1);
    // });

    // it('should have the correct props for a card limit input field', () => {
    //   expect(container.find('input[name="limit"]').props()).toEqual({
    //     onBlur: () => {},
    //     id: 'form-card-limit',
    //     maxLength: 10,
    //     minLength: 0,
    //     name: 'limit',
    //     type: 'text'
    //   });
    // });

    it('should have a submit button', () => {
      expect(container.find('button[type="submit"]').length).toEqual(1);
    });

    // it('should have the correct props for a form submit button', () => {

    //   const addCreditCardSubmit = () => {
    //     console.log('mok function')
    //   };

    //   expect(container.find('button[type="submit"]').props()).toMatchObject({
    //     className: 'form-button',
    //     onClick: addCreditCardSubmit,
    //     id: 'form-button-submit',
    //     type: 'submit',
    //     children: "Add",
    //     disabled: false
    //   });
    // });

    // it('should call the addCreditCardSubmit function on button click', () => {
    //   container.find('button[type="submit"]').simulate('click');
    //   expect(addCreditCardSubmit).toHaveBeenCalled();
    // });
});


