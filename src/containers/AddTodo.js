import React from 'react'
import {
  connect
} from 'react-redux'
import {
  addTodo,
  toggleImgs
} from '../actions'

let AddTodo = ({
  dispatch
}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add 任务 Todo
        </button>

        <button type="" onClick={e=>{
           e.preventDefault()
           
           dispatch(toggleImgs())
           console.log('click this bottom')
        }}>
          改变
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo