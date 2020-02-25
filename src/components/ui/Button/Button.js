import styled from 'styled-components';

export default styled.button`
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: ${({ active }) => (active ? '#fff' : '#000')};
  background-color: ${({ active }) => (active ? '#1890ff' : '#fff')};
  border-color: ${({ active }) => (active ? '#1890ff' : '#d9d9d9')};
  &:focus {
    outline: 0;
  }
`;
