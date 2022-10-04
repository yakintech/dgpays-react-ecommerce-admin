import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {

  let state = useSelector(state => state.todoReducer)

  return (<>
    <h1>Todos Lenght: {state.length}</h1>
  </>)
}

export default Dashboard