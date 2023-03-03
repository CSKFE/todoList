import React from 'react'
import { ContentContainer, DateWrapper, List } from '../styles'
import { ButtonWrapper } from '../styles'
const DeleteListItem = ({ list, isChecked, setIsChecked }) => {
  return (
    <List className={(isChecked ? 'complete delete-item' : 'delete-item')}>
      <ContentContainer>
        {list.content}
      </ContentContainer>
      <ButtonWrapper className="btn-wrap">
        <button type='button' >수정</button>
      </ButtonWrapper>
      <DateWrapper>
        <span>{list.date}</span>
      </DateWrapper>
    </List>
  )
}

export default DeleteListItem