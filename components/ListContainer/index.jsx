import React, { useState } from 'react'
import { InputGroup } from '../../components/Input/styles'
import ListItem from '../../components/List/index'
import { ContentContainer, ButtonWrapper } from '../../components/List/styles'
import { NoData } from '../../GlobalStyles'
import { ListContainer as Container } from './styles'
const ListContainer = ({ todos, setList }) => {
  const [editTodos, setEditTodos] = useState('')
  const [isEditToggle, setIsEditToggle] = useState(false)

  console.log(todos)

  const onEditModeToggle = (idx) => (e) => {
    setIsEditToggle(!isEditToggle)
    const originTodos = [...todos]
    originTodos[idx].editMode = isEditToggle
    setList(originTodos)
  }

  const onEditComplete = (idx) => (e) => {
    const originList = [...todos]
    originList[idx].content = editTodos
    console.log(originList)
    setList(originList)
  }

  const onEdit = (e) => {
    setEditTodos(e.target.value)
  }

  const onClickDeleteList = (idx) => () => {
    let originList = [...todos]
    originList = originList.filter((e) => e.id !== idx)
    setList(originList)
  }

  return (
    <Container>
      {todos.length === 0
        ? <NoData>할 일이 없습니다.</NoData>
        : <ul>
        {todos.length > 0 && todos.map((list, idx) => {
          return <ListItem key={idx}>
            <ContentContainer className='content-container'>
              <label htmlFor={`chk${idx}`}>
                <input type="checkbox" id={`chk${idx}`} />
              </label>
              <InputGroup>
                {
                  list.editMode
                    ? <input type="text" defaultValue={list.content} value={editTodos} onChange={onEdit} />
                    : <input type="text" value={list.content} readOnly />
                }
              </InputGroup>
            </ContentContainer>
            <ButtonWrapper className="btn-wrap">
              {
                list.editMode
                  ? <button type='button' onClick={onEditComplete}>완료</button>
                  : <button type='button' onClick={onEditModeToggle(list.id)}>수정</button>
              }
              <button type='button' onClick={onClickDeleteList(list.id)}>삭제</button>
            </ButtonWrapper>
          </ListItem>
        })}
      </ul>
      }
    </Container>
  )
}

export default ListContainer
