import styled from 'styled-components'

export const InputGroup = styled.label`
  width: 100%;
  &[for=form-input] {
    width: calc(100% - 53px);
    & input {
      min-height: 36px;
    }
  }
  & input {
    width: 100%;
    min-height: 26px;
    
    &:read-only {
      padding: 0;
      border: none;
    }

  }
  & + button {
    margin-left: 10px;
  }
`
