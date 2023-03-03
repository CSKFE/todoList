import styled from 'styled-components'

export const TabButton = styled.button`
  color: tomato;
  flex:1;
  padding: 15px 10px;
  font-size: 0.85rem;
  font-weight: 700;
  &.select {
    background-color: tomato;
    color: #fff;
  }
  & + button {
    border-left: none;
  }
`;