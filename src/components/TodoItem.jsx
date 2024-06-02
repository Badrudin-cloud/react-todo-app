import React from 'react'

const TodoItem = ({ index, task, toggleTask, removeTask }) => {
  return (
    <div
      className={`flex items-center justify-between ${
        task.completed ? "bg-gray-300" : "bg-gray-100"
      } p-2 rounded-md mb-2`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
      <span
        className={`flex-1 ml-2 ${
          task.completed ? "line-through" : ""
        }`}
      >
        {task.text}
      </span>
      <button className="text-red-500 hover:text-red-700" onClick={() => removeTask(index)}>X</button>
    </div>
  );
}

export default TodoItem