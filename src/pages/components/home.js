import React from 'react';
import { useState,useEffect } from 'react';

const HomePage = () => {
    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState('');


    useEffect(() => {
        const getTodo = () => {
          const items = localStorage.getItem('Todos');
          if (items !== null) {
            const arr = items.split(';');
            setTodo(arr);
          }
        };
        getTodo();
      }, []);
 
      const add = () => {
        if (value.trim() !== '') {
          const newTodo = [...todo, value.trim()];
          setTodo(newTodo);
          const todoString = newTodo.join(';');
          localStorage.setItem('Todos', todoString);
          setValue('');
        }
      };
      const handleDelete = () => {
            setTodo([]);
            localStorage.removeItem('Todos');
      };
  return (
    <div className='pt-3'>
    <div className=' mb-4'>
            <input type="text" value={value} 
            onChange={(e)=>{setValue(e.target.value)}}  
            className='w-3/5 rounded-md border border-black  bg-transparent p-2'/>

        <button onClick={add}
         className='mx-1 px-2 py-2 bg-amber-100 rounded-md hover:bg-amber-200' >
         Add
         </button>
            <button className='mx-1 px-2 py-2 bg-amber-100 rounded-md hover:bg-orange-200 ' onClick={handleDelete} > Delete
            </button>
    </div>

        <div className='w-full p-2 text-left '>       
         {todo.map((item,index) =>(
            <div key={index} className='text-lg border border-white rounded-lg p-2 my-2'> {item}</div>    
          ))}       
        </div>
    </div>
  )
};

export default HomePage;