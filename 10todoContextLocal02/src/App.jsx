import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider, useTodo, TodoContext } from "./context/todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo) return;
    let todoToAdd = {
      id: Date.now(),
      todo,
      completed: false,
    };
    setTodos((prev) => [todoToAdd, ...prev]);
  };

  const toggleTodo = () => {};

  const deleteTodo = (id) => {
    setTodos(todos.filter((prevTodo) => prevTodo.id != id));
  };

  const updateTodo = (todo, id) => {
    setTodos((prevTodo) => [
      ...todos,
      { id, todo, completed: prevTodo.completed },
    ]);
  };

  useEffect(() => {
    // console.log(todos)
    // if (todos && todos.length > 0) {
      // }
    setTodos(todos);
    console.log('Added this ');
    console.log(todos);
    
  }, [addTodo]);

  return (
      <TodoProvider
        value={{ todos, addTodo, toggleTodo, deleteTodo, updateTodo }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>

            <div className="flex flex-wrap gap-y-3">
              {todos.map((ele, index, arr) => (
                <div id={ele.id} className="w-full">
                <TodoItem todo={ele} />
              </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
  );
}

export default App;
