import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-8 bg-gray-800 p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-700 p-3 mb-2 rounded"
          >
            <span className="text-white">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
