import React, { memo } from 'react'
import ListContainer from '../../components/ListContainer/index';
const UseLists = memo(({ todos, setList, curIndex, isChecked, setIsChecked }) => {
  return (
    <ListContainer todos={todos} setList={setList} curIndex={curIndex} isChecked={isChecked} setIsChecked={setIsChecked} />
  )
})

export default UseLists