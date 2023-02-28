import React from 'react'
import { TabButton } from './styles'
const Tabs = ({ tabs, className }) => {
  return (
    <TabButton type='button' className={tabs.show ? 'select' : ''}>{tabs.content}</TabButton>
  )
}

export default Tabs