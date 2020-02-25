import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsDetail, { NewsThumbnail, NewsTitle } from './NewsDetail.component';

const news = {
  thumbnail: 'thumbnail',
  post_title: 'post title',
  description: 'description',
};

describe('News Details', () => {
  it('should render the component correctly ', () => {
    const wrapper = shallow(<NewsDetail news={news} />);
    expect(wrapper).not.toBeNull();
  });
  it('should have the news prop', () => {
    const wrapper = mount(<NewsDetail news={news} />);
    expect(wrapper.prop('news')).toEqual(news);
  });
  it('should have NewsThumbnail component', () => {
    const wrapper = shallow(<NewsDetail news={news} />);
    expect(wrapper.find(NewsThumbnail)).toHaveLength(1);
  });
  it('should have value of title ', () => {
    const wrapper = shallow(<NewsDetail news={news} />);
    expect(
      wrapper
        .find(NewsTitle)
        .dive()
        .text(),
    ).toBe(news.post_title);
  });
});
