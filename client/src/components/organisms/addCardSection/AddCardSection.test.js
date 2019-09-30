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

  const container = mount(
    <Provider store={store}>
      <AddCardSection/>
      </Provider>
    )
  
    it('should have a name input field', () => {
      expect(container.find('input[name="name"]').length).toEqual(1);
    });

    it('should have a card number input field', () => {
      expect(container.find('input[name="cardNumber"]').length).toEqual(1);
    });

    it('should have a card limit input field', () => {
      expect(container.find('input[name="limit"]').length).toEqual(1);
    });

    it('should have a submit button', () => {
      expect(container.find('button[type="submit"]').length).toEqual(1);
    });
});


