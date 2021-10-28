import styled from 'styled-components';

export const HeaderH1 = styled.header`
  font-family: serif;
  font-size: 30px;
  letter-spacing: 1px;
  width: 100%;
  position: relative;
  display: inline-block;
  margin-left: 100px;
  &:before,
  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    width: 100%;
    height: 3px;
    background: #6CBD83;
    border: solid #FFF;
    border-width: 0 10px;
  }
  &:before {
    margin-left: -100%;
  }
  &:after {
    margin-right: -100%;
  }
`;
