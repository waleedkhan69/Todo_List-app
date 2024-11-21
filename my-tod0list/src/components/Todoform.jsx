import React, { Fragment, useState } from 'react';
import { usetodo } from '../context/Todocontext';

const Todoform = () => {
  const [todo, settodo] = useState('');
  const { addtodo } = usetodo(); 

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addtodo({ todo, completed: false });
    settodo('');
  };

  return (
    <Fragment>
      <form onSubmit={add} action="#" className="flex">
        <input
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
          placeholder="Write Todo here...."
          className="w-full border border-black/10 rounded-l-lg outline-none duration-150  text-2xl bg-white py-1.5"
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"
        >
          Add Todo
        </button>
      </form>
    </Fragment>
  );
};

export default Todoform;
