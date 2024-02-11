import React from "react";

import Todos from "./components/Todos";
import AddTodo from "./components/Addtodo";

export default function App() {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
    //   <h1 className="text-3xl font-bold mb-6">Todos</h1>
    <div>
      <h1 className="flex justify-center bg-gray-500 font-bold mb-6 mt-7 text-3xl">
        Redux Todo
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}
