import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({
  onClick,
  completed,
  text,
  src,
  show
}) => ( < li onClick = {
    onClick
  }
  style = {
    {
      textDecoration: completed ? 'line-through' : 'none'
    }
  } > {
    show + ''
  }
  <img src={src} style={{display: !show ? 'none' : 'block' }}/> < br / > {
    text
  } < /li>  
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

/*<img src={"uisdc-color-1.jpg"}/ > */