import styled from 'styled-components';

const theme = {
    blue: {
        default: '#6CBD83',
        hover:   '#4ead68',
    },
};

export const Button = styled.button`
  background-color: ${() => theme.blue.default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${() => theme.blue.hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
