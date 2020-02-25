import React from 'react';
import { shallow, mount } from 'enzyme';
import BCHPrice from './BCHPrice.component';

describe('BCH Price', () => {
  it('should render the component correctly ', () => {
    const wrapper = shallow(<BCHPrice price={300} />);
    expect(wrapper).not.toBeNull();
  });
  it('should have the price 200', () => {
    const wrapper = mount(<BCHPrice price={200} />);
    expect(wrapper.prop('price')).toBe(200);
  });
});
