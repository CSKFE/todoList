import styled from 'styled-components'

export const Warning = styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;

  input {
    flex: 1;

    & + span {
      font-size: 11px;
      color: tomato;
    }
  }
`;