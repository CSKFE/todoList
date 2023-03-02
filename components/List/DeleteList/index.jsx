import React from 'react'
import { List } from '../styles'
const DeleteListItem = ({ list }) => {
  return (
    <List>
      {list.content}
    </List>
  )
}

export default DeleteListItem