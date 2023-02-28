import React from 'react'
import { Warning as WarningCompo } from './styles'
const WarningMessage = ({children}) => {
  return (
    <WarningCompo>
      {children}
    </WarningCompo>
  )
}

export default WarningMessage