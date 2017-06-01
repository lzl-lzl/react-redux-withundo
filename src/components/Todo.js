import React from 'react'
import PropTypes from 'prop-types'

const spanStyle = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%'
}
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
      textDecoration: completed ? 'line-through' : 'none',
      position: 'relative'
    }
  } > {
    show ? '显示图' : '隐藏'
  }
  <img src={src} style={{display: !show ? 'none' : 'block' ,width:completed?'160px':'auto',opacity:completed?'.2':'1'}}/> < span style = {
    completed ? spanStyle : {}
  } > {
    text
  } < /span>  < /li >
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

/*<img src={"uisdc-color-1.jpg"}/ > */