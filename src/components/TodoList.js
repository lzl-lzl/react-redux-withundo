import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({
  todos,
  onTodoClick,
  show
}) => (
  <ul>
    {/* {
      show + ''
    }*/}
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        show={show}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList