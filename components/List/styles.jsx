import styled from 'styled-components'
export const List = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  &.complete {
  &.delete-item {
    justify-content: space-between;
  }
  }
  & + li {
    margin-top: 8px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 106px);
  margin-right: 10px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 0.75rem;
    line-height: 11px;
    min-height: 26px;
    & + button {
      margin-left: 5px;
    }

  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 15px;
  min-height: 15px;
  border: 1px solid #ddd;
  border-radius: 100%;
  margin-right: 5px;
  & input[type=checkbox] {
    width: 1px;
    height: 1px;
    min-height: auto;
    margin: -1px;
    padding: 0;
    &::after {
      content: '';
      display: flex;
      border-radius: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background-color: tomato;
      display: none;
    }
    &:checked {
      &::after {
        display: flex;
      }
    }
  }
`;

export const DateWrapper = styled.div`
  width: 100%;
  line-height: 0.5em;
  margin-top: 10px;
  span {
    font-size: 11px;
    line-height: 11px;
    color: #777;
  }
`