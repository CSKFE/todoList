import React from 'react'
import { ListContainer } from '../styles';
import DeleteListItem from '../../List/DeleteList/index';
import { NoData } from '../../../GlobalStyles';
const DeleteListContainer = ({ todos, setList, curIndex }) => {
  console.log(todos.filter(e => e.delete).length)
  return (
    <ListContainer>
      <ul>
        {
          todos.map((e, idx) => {
            return e.delete
            ? <DeleteListItem key={idx} list={e} />
            : null
          })
        }
      </ul>
      {todos.filter(e => e.delete).length === 0 && <NoData>삭제된 항목이 없습니다.</NoData>}
    </ListContainer>
  )
}

export default DeleteListContainer