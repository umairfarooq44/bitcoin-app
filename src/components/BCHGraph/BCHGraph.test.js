import React from 'react';
import { shallow, mount } from 'enzyme';
import BCHGraph from './BCHGraph.component';
import Heading from '../ui/Heading';

describe('BCH Graph', () => {
  it('should render the component correctly ', () => {
    const wrapper = shallow(<BCHGraph data={[]} />);
    expect(wrapper).not.toBeNull();
  });
  it('should have the data prop', () => {
    const wrapper = mount(<BCHGraph data={[]} />);
    expect(wrapper.prop('data')).toEqual([]);
  });
  it('should have Heading component', () => {
    const wrapper = shallow(<BCHGraph data={[]} />);
    expect(wrapper.find(Heading)).toHaveLength(1);
  });
});
