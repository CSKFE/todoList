import styled from 'styled-components'

export const InputGroup = styled.label`
  width: calc(100% - 60px);

  & input {
    width: 100%;
    min-height: 48px;
  }
  & + button {
    margin-left: 15px;
  }
`
