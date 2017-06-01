import undoable from 'redux-undo'
let stateFirst = {
  id: 4,
  src: 'uisdc-color-1.jpg',
  text: 'uisdc-color-1.jpg',
  completed: false
}
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        src: action.text,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [stateFirst], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos)

export default undoableTodos


/*
{
           //没有这个visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      id:'1',
      text: 'Consider using Redux',
      completed: true,
    },
    {
      id:'1',
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

 */