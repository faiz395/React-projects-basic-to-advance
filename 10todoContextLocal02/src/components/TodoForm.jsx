import React, { useEffect, useState } from "react";
import { TodoProvider, useTodo, TodoContext } from "../context/todo";

function TodoForm() {
    const {addTodo}=useTodo();
    const [todoVal,setTodoVal]=useState('');
    const handleSubmit=(e)=>{

        e.preventDefault();
        if(!todoVal) return;

        addTodo(todoVal);
        setTodoVal('');
    }

    return (
        <form  className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoVal}
                onChange={(e)=>{setTodoVal(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={(e)=>(addTodo(e.target.value))}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;