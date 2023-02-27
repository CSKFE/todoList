import React, { useState, useCallback, memo, useEffect } from 'react'
import { List } from './styles'
import { ContentContainer, ButtonWrapper } from './styles'
import { InputGroup } from '../InputText/styles'
const ListItem = ({ todos, setList, list, idx }) => {
  const [editTodos, setEditTodos] = useState('')
  const [isEditToggle, setIsEditToggle] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const onEditModeToggle = useCallback((idx) => {
    setIsEditToggle((prev) => !prev)
  }, [])

  const onCheckedToggle = useCallback((idx) => {
    setIsChecked((prev) => !prev)
    const originList = [...todos]
    originList[idx].checked = isChecked
    setList(originList)
  }, [])

  const onClickDeleteList = (idx) => {
    setList(todos.filter(todos => todos.id !== idx))
  }

  const onEditComplete = (idx) => {
    const originList = [...todos]
    originList[idx].content = editTodos
    setList(originList)
    setIsEditToggle(false)
    setEditTodos('')
  }

  const onEdit = (e) => {
    setEditTodos(e.target.value)
  }

  return (
    <List className={list.checked ? 'complete' : ''}>
      <ContentContainer className='content-container'>
        <label htmlFor={`chk${idx}`}>
          <input type="checkbox" id={`chk${idx}`} onChange={() => onCheckedToggle(list.id)} />
        </label>
        <InputGroup>
          {
            isEditToggle
              ? <input type="text" value={isEditToggle ? editTodos : list.content} onChange={onEdit} />
              : <input type="text" value={list.content} readOnly />
          }
        </InputGroup>
      </ContentContainer>
      <ButtonWrapper className="btn-wrap">
        {
          isEditToggle
            ? <button type='button' onClick={() => onEditComplete(list.id)}>완료</button>
            : <button type='button' onClick={() => onEditModeToggle(list.id)}>수정</button>
        }
        <button type='button' onClick={() => onClickDeleteList(list.id)}>삭제</button>
      </ButtonWrapper>
    </List>
  )
}

export default ListItem
