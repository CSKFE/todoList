import React from 'react'
import { TabWrap } from './styles'
import Tabs from './Tabs'

const TabContainer = ({ tabArr, setTab, setIndex }) => {
  return (
    <TabWrap>
      { tabArr.map((el, idx) => <Tabs key={idx} setTab={setTab} tabArr={tabArr} tab={el} setIndex={setIndex} idx={idx} />) }
    </TabWrap>
  )
}

export default TabContainer