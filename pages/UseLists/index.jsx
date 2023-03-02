import React, { memo } from 'react'
import ListContainer from '../../components/ListContainer/index';
const UseLists = memo(({ todos, setList, curIndex }) => {
  return (
    <ListContainer todos={todos} setList={setList} curIndex={curIndex} />
  )
})

export default UseLists