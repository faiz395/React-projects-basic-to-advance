import React, { useState } from "react";
import { TodoProvider, useTodo, TodoContext } from "../context/todo";

function TodoItem({ todo }) {
  // const [todoItem,setTodoItem]=useState({});
  const { deleteTodo, toggleTodo } = useTodo();

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
                `}
    >
      <input
        type="checkbox"
        className="cursor-pointer bg-[#ccbed7]"
        checked={todo.completed}
        onChange={toggleTodo}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-white border-transparent`}
        value={todo.todo}
        // onChange={(e) => setTodoMsg(e.target.value)}
        readOnly:true
        // readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      {/* <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        // onClick={() => {
        //     if (todo.completed) return;

        //     if (isTodoEditable) {
        //         editTodo();
        //     } else setIsTodoEditable((prev) => !prev);
        // }}
        // disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button> */}
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
