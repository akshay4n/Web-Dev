import './App.css';
import Header from './myComponents/Header';
import {Footer} from './myComponents/Footer';
import {Todos} from './myComponents/Todos';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("Delete this task - ", todo.title);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"Go to market",
      desc:"Decription of going to the market"
    },
    {
      sno:2,
      title:"Go to mall",
      desc:"Decription of going to the mall"
    },
    {
      sno:3,
      title:"Go to gym",
      desc:"Decription of going to the gym"
    }
  ])
  return (
    <>
      <Header title='Todos List' searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
