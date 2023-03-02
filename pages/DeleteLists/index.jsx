import React, { memo } from 'react'
import DeleteListContainer from '../../components/ListContainer/DeleteListContainer'
const DeleteLists = memo(({ todos, setList, curIndex }) => {
  return (
    <DeleteListContainer todos={todos} setList={setList} curIndex={curIndex} />
  )
})

export default DeleteLists