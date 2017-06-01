import {
  connect
} from 'react-redux'
import {
  toggleTodo
} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter, imgsFilter) => {
  console.log(imgsFilter)
    /*console.log(todos)
    if (imgsFilter == 'show') {
      console.log(todos)
      return todos.filter(t => !t.completed)
      return todos.map(t => t.src = 'asdf')

    }*/
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }

}
const show_Not = (imgsFilter) => imgsFilter


const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter, state.imgsFilter),
  show: show_Not(state.imgsFilter)
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList