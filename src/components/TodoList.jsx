import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <div className='w-full max-w-sm'>{tasks.map((task, index) => <TodoItem key={index} index={index} task={task} toggleTask={toggleTask} removeTask={removeTask} />)}</div>
  )
}

export default TodoList