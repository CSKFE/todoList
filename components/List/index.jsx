import React, { memo } from 'react'
import { List } from './styles'
const ListItem = ({ children }) => {
  return (
    <List>
      {children}
    </List>
  )
}

export default memo(ListItem)
