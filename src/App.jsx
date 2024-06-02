import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (todo) => {
    setTasks([...tasks, { text: todo, completed: false }])
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const removeTask = (index) =>{
    const newTasks = tasks.filter((todo, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold mb-8'>ToDo list App</h1>
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask}/>
    </div>
  )
}

export default App