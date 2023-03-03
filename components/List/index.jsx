import React, { useState, useCallback, memo, useRef } from 'react'
import { List } from './styles'
import { ContentContainer, ButtonWrapper, Label, DateWrapper } from './styles'
import { InputGroup } from '../InputText/styles'
import WarningMessage from '../WarningMessage'
const ListItem = memo(({ todos, setList, list, isChecked, setIsChecked }) => {
  const [editTodos, setEditTodos] = useState('')
  const [isEditToggle, setIsEditToggle] = useState(false)
  const [isContent, setIsContent] = useState(true)
  const inputRef = useRef([])
  const onEditModeToggle = useCallback(() => {
    setIsEditToggle((prev) => !prev)
  }, [isEditToggle])

  const onCheckedToggle = (idx) => (e) => {
    setIsChecked((prev) => !prev)
    const originList = [...todos]
    const checkedItem = originList.filter(todos => todos.id === idx)
    originList[checkedItem[0]['id']].checked = e.target.checked
    setList(originList)
  }

  const onClickDeleteList = (idx) => {
    if(isEditToggle) return
    const originList = [...todos]
    originList[idx].delete = true
    setList(originList)
  }

  const onEditComplete = (list) => {
    if(!editTodos) {
      setIsContent(false)
      inputRef.current[list.id].focus()
      return
    }
    const originList = [...todos]
    originList[list.id].content = editTodos
    setList(originList)
    setIsEditToggle(false)
    setEditTodos('')
  }

  const onEdit = (e) => {
    e.target.value ? setIsContent(true) : setIsContent(false) 
    setEditTodos(e.target.value)
  }

  return (
    <List className={list.checked ? 'complete' : ''}>
      <ContentContainer className='content-container'>
        <Label htmlFor={`chk${list.id}`}>
          <input type="checkbox" id={`chk${list.id}`} onChange={onCheckedToggle(list.id)} />
        </Label>
        <InputGroup>
          {
            isEditToggle
              ? <input type="text" ref={el => (inputRef.current[list.id] = el)} value={isEditToggle ? editTodos : list.content} onInput={onEdit} />
              : <input type="text" ref={el => (inputRef.current[list.id] = el)} value={list.content} readOnly />
          }
        </InputGroup>
      </ContentContainer>
      <ButtonWrapper className="btn-wrap">
        {
          isEditToggle
            ? <button type='button' onClick={() => onEditComplete(list)}>완료</button>
            : <button type='button' onClick={onEditModeToggle}>수정</button>
        }
        <button type='button' onClick={() => onClickDeleteList(list.id)}>삭제</button>
      </ButtonWrapper>
      <DateWrapper>
        {<span>생성일{list.date}</span>}
      </DateWrapper>
      {!isContent && <WarningMessage>내용을 입력해주세요.</WarningMessage>}
    </List>
  )
})

export default ListItem
