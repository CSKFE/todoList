import React, { memo } from 'react'
import DeleteListContainer from '../../components/ListContainer/DeleteListContainer'
const DeleteLists = memo(({ todos, setList, curIndex, isChecked, setIsChecked }) => {
  return (
    <DeleteListContainer todos={todos} setList={setList} curIndex={curIndex} isChecked={isChecked} setIsChecked={setIsChecked} />
  )
})

export default DeleteLists