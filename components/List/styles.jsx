import styled from 'styled-components'

export const List = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &.complete {
    text-decoration: line-through;
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
    & + button {
      margin-left: 5px;
    }
  }
`
