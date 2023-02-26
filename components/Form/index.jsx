import React, { useState, useRef } from 'react'
import { Form as FormElement } from './styles'
import { InputGroup } from '../Input/styles'

const Form = ({ setList }) => {
  const [todos, setTodos] = useState('')
  const countRef = useRef(0)

  const onChangeInput = (e) => {
    setTodos(e.target.value)
  }
  const onSubmitlist = (e) => {
    e.preventDefault()
    setList(prev => [...prev, {
      id: countRef.current,
      content: todos,
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
        <input type="text" id='form-input' autoComplete='off' value={todos} onChange={onChangeInput} />
      </InputGroup>
      <button type='submit'>추가</button>
    </fieldset>
    </FormElement>

  )
}

export default Form
