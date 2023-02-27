import React from 'react'
import ListItem from '../../components/List/index'
import { NoData } from '../../GlobalStyles'
import { ListContainer as Container } from './styles'

const ListContainer = ({ todos, setList }) => {
  console.log(todos)
  return (
    <Container>
      {todos.length === 0
        ? <NoData>할 일이 없습니다.</NoData>
        : <ul>
        {todos.length > 0 && todos.map((list, idx) => {
          return <ListItem key={idx} todos={todos} setList={setList} list={list} idx={idx} />
        })}
      </ul>
      }
    </Container>
  )
}

export default ListContainer
