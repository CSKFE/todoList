import React from 'react'
import { TabWrap } from './styles'
import Tabs from './Tabs'

const TabContainer = ({ tabs }) => {
  return (
    <TabWrap>
      { tabs.map((el, idx) => <Tabs key={idx} tabs={el} className={el.show} />) }
    </TabWrap>
  )
}

export default TabContainer