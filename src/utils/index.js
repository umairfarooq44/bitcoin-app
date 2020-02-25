// eslint-disable-next-line import/prefer-default-export
export const parseDate = date => {
  const abc = new Date(Date.parse(date));
  const [, day, month, year] = abc.toString().split(' ');
  return `${day} ${month} ${year}`;
};
