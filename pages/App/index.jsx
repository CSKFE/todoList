import React, { useState } from 'react'
import { GlobalStyles } from '../../GlobalStyles'
import TodoContainer from '../../components/TodoContainer'
import ListContainer from '../../components/ListContainer'
import Form from '../../components/Form'
import DeleteLists from '../DeleteLists'
import UseLists from '../UseLists'
import TabContainer from '../../components/TabContainer'
const App = () => {
  const [list, setList] = useState([])
  const tab = [
    {
      show: true,
      content: '할 일 리스트'
    },
    {
      show: false,
      content: '삭제된 리스트'
    }
  ]

  return (
    <>
      <GlobalStyles />
      <TodoContainer>
        <Form setList={setList} />
        <TabContainer tabs={tab} />
        <UseLists todos={list} setList={setList} />
        <DeleteLists />
        {/* <ListContainer todos={list} setList={setList} /> */}
      </TodoContainer>
    </>
  )
}

export default App
