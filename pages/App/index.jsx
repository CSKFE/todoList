import React, { useState } from 'react'
import { GlobalStyles } from '../../GlobalStyles'
import TodoContainer from '../../components/TodoContainer'
import ListContainer from '../../components/ListContainer'
import Form from '../../components/Form'

const App = () => {
  const [list, setList] = useState([])
  return (
    <>
      <GlobalStyles />
      <TodoContainer>
        <Form setList={setList} />
        <ListContainer todos={list} setList={setList} />
      </TodoContainer>
    </>
  )
}

export default App
