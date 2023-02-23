import React from 'react'
import { TodoContain } from './styles'
const TodoContainer = ({ children }) => {
  return (
    <TodoContain>{children}</TodoContain>
  )
}

export default TodoContainer
