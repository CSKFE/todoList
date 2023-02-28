import React, { useState, useRef } from 'react'
import { Form as FormElement } from './styles'
import { InputGroup } from '../InputText/styles'
import WarningMessage from '../Warning'
const Form = ({ setList }) => {
  const [todos, setTodos] = useState('')
  const [isTodos, setIsTodos] = useState(true)
  const countRef = useRef(0)
  const inputRef = useRef()
  const onChangeInput = (e) => {
    setTodos(e.target.value)
  }
  const onSubmitlist = (e) => {
    e.preventDefault()
    if(!todos) {
      setIsTodos(prev => !prev)
      inputRef.current.focus()
      return
    }
    setList(prev => [...prev, {
      id: countRef.current,
      content: todos,
      checked: false,
      editMode: false
    }])
    setTodos('')
    countRef.current++
  }

  return (
    <FormElement onSubmit={onSubmitlist}>
      <fieldset>
        <legend><h1>다음엔 무엇을 할건가요?</h1></legend>
        <InputGroup htmlFor="form-input">
          <input type="text" id='form-input' ref={inputRef} autoComplete='off' value={todos} onChange={onChangeInput} />
        </InputGroup>
        <button type='submit'>추가</button>
      </fieldset>
      {!isTodos && <WarningMessage>할 일을 입력해 주세요</WarningMessage>}
    </FormElement>

  )
}

export default Form
