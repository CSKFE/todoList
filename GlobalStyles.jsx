import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol, ul {
    list-style: none;
  }

  html {
    height: 100%;
    font-size: 16px;
    line-height: 1.2em;
  }

  body {
    width:100%;
    height: 100%;
    overflow-x: hidden;
  }

  fieldset {
    border: none;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 5px 10px;
    min-height: 32px;
  }

  button {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    min-height: 32px;
    padding: 4px 10px;
    cursor: pointer;
    font-size: 0.75rem;
    line-height: 12px;
    transition: hover 0.5s ease-in-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  #root {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }

  .container {
    margin-top: 50px;
  }
`

export const NoData = styled.div`
  font-size: 1rem;
  line-height: 1.5em;
  font-weight: 700;
  color: #000;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
`

export const ListWrap = styled.div`
  width: 100%;
`