import styled from 'styled-components'

export const TabButton = styled.button`
  color: tomato;
  flex:1;
  padding: 10px;
  &.select {
    background-color: tomato;
    color: #fff;
  }
  & + button {
    border-left: none;
  }
`;