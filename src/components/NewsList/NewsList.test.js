import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsList, { NewsLink } from './NewsList.component';
import Heading from '../ui/Heading';

describe('News List', () => {
  it('should render the component correctly ', () => {
    const wrapper = shallow(<NewsList newsList={[]} />);
    expect(wrapper).not.toBeNull();
  });
  it('should have the newsList prop', () => {
    const wrapper = mount(<NewsList newsList={[]} />);
    expect(wrapper.prop('newsList')).toEqual([]);
  });
  it('should have NewsLink component', () => {
    const wrapper = shallow(<NewsList newsList={[{}]} />);
    expect(wrapper.find(NewsLink)).toHaveLength(1);
  });
  it('should not have NewsLink component', () => {
    const wrapper = shallow(<NewsList newsList={[]} />);
    expect(wrapper.find(NewsLink)).toHaveLength(0);
  });
  it('should have Heading component', () => {
    const wrapper = shallow(<NewsList newsList={[]} />);
    expect(wrapper.find(Heading)).toHaveLength(1);
  });
});
