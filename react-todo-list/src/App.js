import './App.css';
import Header from './myComponents/Header';
import {Footer} from './myComponents/Footer';
import {Todos} from './myComponents/Todos';
import { AddTodo } from './myComponents/AddTodo';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo)=>{
    console.log("Delete this task - ", todo.title);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    console.log("Add this task",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else
    {
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title='Todos List' searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;