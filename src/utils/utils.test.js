import { parseDate } from './index';

describe('News List', () => {
  it('should return date 23 feb ', () => {
    expect(parseDate('2020-02-23T00:00:00.000Z')).toBe('Feb 23 2020');
  });
  it('should return date 8 sep', () => {
    expect(parseDate('2019-09-08T00:00:00.000Z')).toBe('Sep 08 2019');
  });
});
