import { useContext, createContext } from "react";


export const Todocontext = createContext({
  Todos: [],
  addtodo: (todo) => {},
  updatetodo: (id, todo) => {},
  deletetodo: (id) => {},
  togglecompletetodo: (id) => {},
});


export const usetodo = () => {
  return useContext(Todocontext);
};

export const Todoprovider = Todocontext.Provider;
