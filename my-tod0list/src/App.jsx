import { useEffect, useState } from "react";
import { Todocontext } from "./context/Todocontext";
import { Todoform, Todoitem } from "./components";

function App() {
  const [todo, settodo] = useState([]);

  const addtodo = (todo) => {
    settodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatetodo = (id, updatedTodo) => {
    settodo((prev) =>
      prev.map((prevTodos) => (prevTodos.id === id ? updatedTodo : prevTodos))
    );
  };

  const deletetodo = (id) => {
    settodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const togglecompletetodo = (id) => {
    settodo((prev) =>
      prev.map((prevTodos) =>
        prevTodos.id === id
          ? { ...prevTodos, completed: !prevTodos.completed }
          : prevTodos
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      settodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <Todocontext.Provider
      value={{ todo, addtodo, updatetodo, togglecompletetodo, deletetodo }}
    >
      <div className="bg-[#89909b] h-screen w-[100%] py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg text-black">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 bg-white">
            Manage your Todos
          </h1>
          <div className="mb-2">
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todoitem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todocontext.Provider>
  );
}

export default App;
