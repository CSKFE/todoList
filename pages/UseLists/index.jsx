import React from 'react'
import ListContainer from '../../components/ListContainer/index';

const UseLists = ({ todos, setList }) => {
  return (
    <div>
      <ListContainer todos={todos} setList={setList} />
    </div>
  )
}

export default UseLists