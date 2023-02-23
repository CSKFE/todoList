import React, { useState, useRef } from 'react'
import { GlobalStyles, NoData } from '../../GlobalStyles'
import ListItem from '../../components/List/index'
import { Form } from '../../components/Form/styles'
import TodoContainer from '../../components/TodoContainer'
import { InputGroup } from '../../components/Input/styles'
import { ListContainer } from '../../components/ListContainer/styles'
import { ContentContainer, ButtonWrapper } from '../../components/List/styles'
const App = () => {
  const [list, setList] = useState([])
  const [todos, setTodos] = useState('')
  const countRef = useRef(0)

  const onSubmitlist = (e) => {
    e.preventDefault()
    setList(prev => [...prev, {
      id: countRef.current,
      content: todos
    }])
    setTodos('')
    countRef.current++
  }

  const onChangeInput = (e) => {
    setTodos(e.target.value)
  }

  const onChangelistContent = (idx) => () => {
    const originList = [...list]
    const editList = originList[idx]
  }

  const onClickDeleteList = (idx) => () => {
    let originList = [...list]
    originList = originList.filter((e) => e.id !== idx)
    setList(originList)
  }

  return (
    <>
      <GlobalStyles />
      <TodoContainer>
        <Form onSubmit={onSubmitlist}>
          <fieldset>
            <legend><h1>다음엔 무엇을 할건가요?</h1></legend>
            <InputGroup htmlFor="form-input">
              <input type="text" id='form-input' autoComplete='off' value={todos} onChange={onChangeInput} />
            </InputGroup>
            <button type='submit'>추가</button>
          </fieldset>
        </Form>
          <ListContainer>
            {list.length === 0
              ? <NoData>할 일이 없습니다.</NoData>
              : <ul>
                {list.length > 0 && list.map((list, idx) => {
                  return <ListItem key={idx}>
                    <ContentContainer className='content-container'>
                      <label htmlFor={`chk${idx}`}>
                        <input type="checkbox" id={`chk${idx}`} />
                      </label>
                      <InputGroup>
                        <input type="text" value={list.content} readOnly/>
                      </InputGroup>
                    </ContentContainer>
                    <ButtonWrapper className="btn-wrap">
                      <button type='button' onClick={onChangelistContent(list.id)}>수정</button>
                      <button type='button' onClick={onClickDeleteList(list.id)}>삭제</button>
                    </ButtonWrapper>
                  </ListItem>
                })}
              </ul>
            }
          </ListContainer>
      </TodoContainer>
    </>
  )
}

export default App
