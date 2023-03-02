import React from 'react'
import { TabButton } from './styles'
const Tabs = ({ setTab, tabArr, tab, setIndex, idx }) => {
  const onClickTabToggle = (idx) => {
    const originTabArray = [...tabArr]
    originTabArray.map(e => e.current = false)
    originTabArray[idx].current = originTabArray[idx].current ? false : true
    setTab(originTabArray)
    setIndex(idx)
  }

  return (
    <TabButton type='button' className={tabArr[idx].current ? 'select' : ''} onClick={() => onClickTabToggle(idx)} >{tab.content}</TabButton>
  )
}

export default Tabs