import React, { useState } from 'react'

const TodoForm = ({ addTask }) => {
  const [value, setValue] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!value) return
      addTask(value)
      setValue("")
    }
  return (
    <form className='flex mb-4' onSubmit={handleSubmit}>
        <input type='text' className='border-2 border-gray-300 p-2 rounded-l-md' placeholder='Add todo' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='bg-black text-white p-2 rounded-r-md'>Add</button>
    </form>
  )
}

export default TodoForm