import React, { Fragment, useState } from 'react';
import { usetodo } from '../context/Todocontext';
import { AiTwotoneEdit } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Todoitem = ({ todo }) => {
  const [istodoEditable, setistodoEditable] = useState(false);
  const [todomsg, settodomsg] = useState(todo.todo);
  const { updatetodo, togglecompletetodo, deletetodo } = usetodo();

  const edittodo = () => {
    updatetodo(todo.id, { ...todo, todo: todomsg });
    setistodoEditable(false);
  };

  const togglecompleted = () => {
    togglecompletetodo(todo.id);
  };

  return (
    <Fragment>
      <div
        className={`flex border border-black/10 rounded-lg p-3 py-1 gap-x-3
        shadow-sm shadow-white/10 text-black duration-300 ${
          todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={togglecompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            istodoEditable ? 'border-black/10 px-2' : 'border-transparent'
          } ${todo.completed ? 'line-through' : ''}`}
          value={todomsg}
          onChange={(e) => settodomsg(e.target.value)}
          readOnly={!istodoEditable}
        />
        <button
          className="inline-flex w-8 h-8 rounded-lg shadow-sm border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;
            if (istodoEditable) {
              edittodo();
            } else setistodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {istodoEditable ? <CiSaveDown2 className='text-yellow-400' /> : <AiTwotoneEdit />}
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg shadow-sm border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deletetodo(todo.id)}
        >
          <MdDelete  className='text-red-700'/>
        </button>
      </div>
    </Fragment>
  );
};

export default Todoitem;
