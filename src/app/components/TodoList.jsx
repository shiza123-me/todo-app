'use client';
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null); // store image file
  const [menuOpen, setMenuOpen] = useState(false);

  // Add new task
  const addTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: input,
          completed: false,
          image: image ? URL.createObjectURL(image) : null,
        },
      ]);
      setInput("");
      setImage(null);
      setMenuOpen(false);
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle completed
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="relative w-full">
      {/* Input with plus icon */}
      <div className="flex items-center border border-gray-300 rounded p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 focus:outline-none"
          readOnly
          onClick={() => setMenuOpen(true)}
        />
        <button onClick={() => setMenuOpen(!menuOpen)} className="ml-2">
          <Icon icon="ic:outline-add" className="w-6 h-6 text-red-500" />
        </button>
      </div>

      {/* Popup Menu */}
      {menuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded shadow-lg p-4 z-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mb-2"
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="mb-2"
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setMenuOpen(false)}
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={addTask}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Add Task
            </button>
          </div>
        </div>
      )}

      {/* Task List */}
      <ul className="space-y-2 mt-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-2 border rounded ${
              task.completed ? "bg-green-100 text-gray-500 line-through" : "bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                onClick={() => toggleComplete(task.id)}
                className="cursor-pointer"
              >
                {task.text}
              </span>

              {/* Display Image */}
              {task.image && (
                <img
                  src={task.image}
                  alt="task image"
                  className="w-12 h-12 object-cover rounded"
                />
              )}
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
