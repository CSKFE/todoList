import React, { useState } from 'react'
import { GlobalStyles } from '../../GlobalStyles'
import TodoContainer from '../../components/TodoContainer'
import Form from '../../components/Form'
import DeleteLists from '../DeleteLists'
import UseLists from '../UseLists'
import TabContainer from '../../components/TabContainer'
const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const [list, setList] = useState([])
  const [tab, setTab] = useState([
    {
      current: true,
      content: '할 일 리스트'
    },
    {
      current: false,
      content: '삭제된 리스트'
    }
  ])
  return (
    <>
      <GlobalStyles />
      <TodoContainer>
        <Form setList={setList} />
        <TabContainer tabArr={tab} setTab={setTab} setIndex={setCurrentTabIndex} />
        {currentTabIndex ? <DeleteLists todos={list} setList={setList} curIndex={currentTabIndex} /> : <UseLists todos={list} setList={setList} curIndex={currentTabIndex} />}
      </TodoContainer>
    </>
  )
}

export default App
