import React, { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext(
    {
        todos: [
            // {
            //     id: '123',
            //     todo: "DO this",
            //     completed: false
            // }
        ],

        addTodo: (todos) => { },
        toggleTodo: (id) => { },
        deleteTodo: (id) => { },
        updateTodo: (todo, id) => { }
    }
);

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);