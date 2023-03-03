import React from 'react'
import ListItem from '../List/index'
import { NoData } from '../../GlobalStyles'
import { ListContainer as Container } from './styles'

const ListContainer = ({ todos, setList, curIndex, isChecked, setIsChecked }) => {
  return (
    <Container>
      {todos.length === 0
        ? null
        : <ul>
        {todos.length > 0 && todos.map((list, idx) => {
          return list.delete 
          ? null 
          : <ListItem key={idx} todos={todos} setList={setList} list={list} isChecked={isChecked} setIsChecked={setIsChecked} /> 
        })}
      </ul>
      }
      {todos.filter(e => !e.delete).length === 0 && <NoData>할 일이 없습니다.</NoData>}
    </Container>
  )
}

export default ListContainer
